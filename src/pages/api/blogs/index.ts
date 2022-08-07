import { withSentry } from "@sentry/nextjs";
import { NextApiHandler } from "next";

import { blogHandler } from "../../../server/handler/blog_handler";

export const config = {
  runtime: "experimental-edge",
};

// ==============================
// Route:
//  - GET: /api/blogs
//  - POST: /api/blogs
// ==============================

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET": {
      await blogHandler.getBlogs(req, res);
      return;
    }
    case "POST": {
      // await blogHandler.createBlog(req, res);
      return;
    }
  }
  res.status(405);
};

// TODO: いい感じに `res.status(500).json({ message: err.message });`したいけど方法がわからない
// 現在は text/html がかえってきてしまう
export default withSentry(handler);
