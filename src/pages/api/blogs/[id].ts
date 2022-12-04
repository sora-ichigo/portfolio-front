import { withSentry } from "@sentry/nextjs";
import { NextApiHandler } from "next";

import { corsConfig } from "../../../server/cors";
import { blogHandler } from "../../../server/handler/blog_handler";
import { setMiddleware } from "../../../server/setMiddleware";

// ==============================
// Route:
//  - GET: /api/blogs/[id]
//  - PUT: /api/blogs/[id]
//  - DELETE: /api/blogs/[id]
// ==============================

// export const config = {
//   runtime: "experimental-edge",
// };

const handler: NextApiHandler = async (req, res) => {
  setMiddleware(req, res, corsConfig);

  const { method } = req;
  switch (method) {
    case "GET": {
      await blogHandler.getBlog(req, res);
      return;
    }
    case "PUT": {
      // await blogHandler.updateBlog(req, res);
      return;
    }
    case "DELETE": {
      await blogHandler.deleteBlog(req, res);
      return;
    }
  }
  res.status(405);
};

export default withSentry(handler);
