import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { BlogData } from "../../domain/blog";
import { prismaClient } from "../prisma_client";

// TODO:
// - prisuma client の作成処理を共通化する
// - error handling
//   - レスポンス
//   - sentry 通知: ok
// http res/req におけるキャメルorスネークケースの統一

export const blogHandler: {
  getBlogs: NextApiHandler<{ blogs: BlogData[] }>;
  createBlog: NextApiHandler<{ blog: BlogData }>;
} = {
  getBlogs: async (_req, res) => {
    const blogsFromManual =
      await prismaClient.blog_from_manual_items.findMany();
    const blogsFromRSS = await prismaClient.blog_from_rss_items.findMany();

    let blogs: BlogData[] = [
      ...blogsFromManual.map((blog) => ({
        id: blog.id,
        title: blog.title,
        postedAt: blog.posted_at!,
        siteUrl: blog.site_url,
        thumbbnailUrl: blog.thumbnail_url,
        serviceName: blog.service_name,
      })),
      ...blogsFromRSS.map((blog) => ({
        id: blog.id,
        title: blog.title,
        postedAt: blog.posted_at!,
        siteUrl: blog.site_url,
        thumbbnailUrl: blog.thumbnail_url,
        serviceName: blog.service_name,
      })),
    ];

    // 投稿時間で降順ソート
    blogs = blogs.sort((a, b) => {
      if (a.postedAt > b.postedAt) return -1;
      if (a.postedAt < b.postedAt) return 1;
      return 0;
    });

    return res.status(200).json({ blogs });
  },
  createBlog: async (
    req: NextApiRequest,
    res: NextApiResponse<{
      blog: BlogData;
    }>
  ) => {
    const params: {
      title: string;
      posted_at?: Date;
      site_url: string;
      thumbnail_url: string;
      service_name: string;
    } = req.body;
    const blog = await prismaClient.blog_from_manual_items.create({
      data: {
        id: uuidv4(),
        title: params.title,
        posted_at: params.posted_at
          ? new Date(params.posted_at).toISOString()
          : null,
        site_url: params.site_url,
        thumbnail_url: params.thumbnail_url,
        service_name: params.service_name,
      },
    });

    return res.status(200).json({
      blog: {
        id: blog.id,
        title: blog.title,
        postedAt: blog.posted_at!,
        siteUrl: blog.site_url,
        thumbbnailUrl: blog.thumbnail_url,
        serviceName: blog.service_name,
      },
    });
  },
};
