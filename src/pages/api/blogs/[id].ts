import { withSentry } from "@sentry/nextjs";
import { NextApiHandler } from "next";
import { blogHandler } from "../../../server/handler/blog_handler";

// ==============================
// Route:
//  - GET: /api/blogs/[id]
//  - PUT: /api/blogs/[id]
//  - DELETE: /api/blogs/[id]
// ==============================

export const config = {
  runtime: "experimental-edge",
};

const handler: NextApiHandler = async (req, res) => {
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
  res.status(405);
};

export default withSentry(handler);
