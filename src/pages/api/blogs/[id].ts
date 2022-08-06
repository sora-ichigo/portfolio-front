import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/nextjs";
import { BlogData } from "../../../domain/blog";

// ==============================
// Route:
//  - GET: /api/blogs/[id]
//  - PUT: /api/blogs/[id]
//  - DELETE: /api/blogs/[id]
// ==============================

export const config = {
  runtime: "experimental-edge",
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET": {
        await getBlog(req, res);
        break;
      }
      case "PUT": {
        await updateBlog(req, res);
        break;
      }
      case "DELETE": {
        await deleteBlog(req, res);
        break;
      }
    }
    return res.status(405).end();
  } catch (err) {
    if (err instanceof Error) {
      Sentry.captureException(err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;

const getBlog: NextApiHandler<{ blog: BlogData }> = async (_req, res) => {
  const blog: BlogData = {
    id: "1",
    title: "test",
    postedAt: new Date(),
    siteUrl: "https://example.com",
    thumbbnailUrl: "https://example.com",
    serviceName: "test",
  };
  return res.status(200).json({ blog });
};

const updateBlog: NextApiHandler<{ blog: BlogData }> = async (req, res) => {
  const { title, postedAt, siteUrl, thumbbnailUrl, serviceName } = req.body;
  const blog: BlogData = {
    id: "1",
    title,
    postedAt,
    siteUrl,
    thumbbnailUrl,
    serviceName,
  };
  return res.status(200).json({ blog });
};

const deleteBlog: NextApiHandler<{ blog: BlogData }> = async (_req, res) => {
  const blog: BlogData = {
    id: "1",
    title: "test",
    postedAt: new Date(),
    siteUrl: "https://example.com",
    thumbbnailUrl: "https://example.com",
    serviceName: "test",
  };
  return res.status(200).json({ blog });
};
