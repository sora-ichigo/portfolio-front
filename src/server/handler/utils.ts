import { captureException, flush } from "@sentry/nextjs";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const withErrorHandlingHandler =
  (handler: NextApiHandler): NextApiHandler =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      }

      captureException(err);
      await flush(2000);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
