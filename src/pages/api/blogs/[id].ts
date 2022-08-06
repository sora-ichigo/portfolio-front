import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { BlogData } from "../../../domain/blog";
import { blogHandler } from "../../../server/handler/blog_handler";
import { withErrorHandlingHandler } from "../../../server/handler/utils";

// ==============================
// Route:
//  - GET: /api/blogs/[id]
//  - PUT: /api/blogs/[id]
//  - DELETE: /api/blogs/[id]
// ==============================

export const config = {
  runtime: "experimental-edge",
};

const handler = withErrorHandlingHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    switch (method) {
      case "GET": {
        await blogHandler.getBlog(req, res);
        break;
      }
      case "PUT": {
        await blogHandler.updateBlog(req, res);
        break;
      }
      case "DELETE": {
        await blogHandler.deleteBlog(req, res);
        break;
      }
    }
    return res.status(405).end();
  }
);

export default handler;
