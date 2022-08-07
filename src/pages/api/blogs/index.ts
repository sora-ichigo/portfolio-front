import { NextApiRequest, NextApiResponse } from "next";

import { blogHandler } from "../../../server/handler/blog_handler";
import { withErrorHandlingHandler } from "../../../server/handler/utils";

export const config = {
  runtime: "experimental-edge",
};

// ==============================
// Route:
//  - GET: /api/blogs
//  - POST: /api/blogs
// ==============================

const handler = withErrorHandlingHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
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
  }
);

export default handler;
