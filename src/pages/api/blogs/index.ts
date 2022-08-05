import { NextApiRequest, NextApiResponse } from "next";

import { blogHandler } from "../../../server/handler/blog_handler";

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
};

export default handler;
