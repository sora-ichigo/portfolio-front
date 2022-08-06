import { NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/nextjs";

export const withErrorHandlingHandler =
  (
    handler: (
      req: NextApiRequest,
      res: NextApiResponse
    ) => Promise<NextApiResponse>
  ) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err) {
      if (err instanceof Error) {
        Sentry.captureException(err);
        await Sentry.flush(2000);
        res.status(500).json({ message: err.message });
      }

      Sentry.captureException(new Error("Unknown error"));
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
