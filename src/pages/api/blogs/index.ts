import { NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/nextjs";

import { blogHandler } from "../../../server/handler/blog_handler";

export const config = {
  runtime: "experimental-edge",
};

// ==============================
// Route:
//  - GET: /api/blogs
//  - POST: /api/blogs
// ==============================

// TODO:
// - prisuma client の作成処理を共通化する
// - error handling
//   - レスポンス
//   - sentry 通知
// http res/req におけるキャメルorスネークケースの統一

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET": {
        await blogHandler.getBlogs(req, res);
        break;
      }
      case "POST": {
        await blogHandler.createBlog(req, res);
        break;
      }
    }
    return res.status(405).end();
  } catch (err) {
    if (err instanceof Error) {
      Sentry.captureException(err);
      await Sentry.flush(2000);
      res.status(500).json({ statusCode: 500, message: err.message });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
