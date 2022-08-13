import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime";
import { NextApiHandler } from "next";
import { v4 as uuidv4 } from "uuid";
import * as ogp from "open-graph-scraper";
import { BlogData } from "../../domain/blog";
import { prismaClient } from "../prisma_client";
import { ResponseErorr } from "./error_type";
import { OpenGraphImage, OpenGraphProperties } from "open-graph-scraper";

const getBlogs: NextApiHandler<{ blogs: BlogData[] } | ResponseErorr> = async (
  _req,
  res
) => {
  const blogsFromManual = await prismaClient.blog_from_manual_items.findMany();
  const blogsFromRSS = await prismaClient.blog_from_rss_items.findMany();

  let blogs: BlogData[] = [
    ...blogsFromManual.map((blog) => ({
      id: blog.id,
      title: blog.title,
      postedAt: blog.posted_at,
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
};

const getBlog: NextApiHandler<{ blog: BlogData } | ResponseErorr> = async (
  req,
  res
) => {
  const { id } = req.query;

  const blogFromManual = await prismaClient.blog_from_manual_items.findUnique({
    where: { id: id as string },
  });
  const blogFromRSS = await prismaClient.blog_from_rss_items.findUnique({
    where: { id: id as string },
  });

  if (!blogFromManual && !blogFromRSS) {
    return res.status(404).json({ message: "blog not found" });
  }

  const blog: BlogData = {
    id: blogFromManual?.id || blogFromRSS?.id!,
    title: blogFromManual?.title || blogFromRSS?.title!,
    postedAt: blogFromManual?.posted_at! || blogFromRSS?.posted_at!,
    siteUrl: blogFromManual?.site_url || blogFromRSS?.site_url!,
    thumbbnailUrl: blogFromManual?.thumbnail_url || blogFromRSS?.thumbnail_url!,
    serviceName: blogFromManual?.service_name || blogFromRSS?.service_name!,
  };

  return res.status(200).json({ blog });
};

const createBlog: NextApiHandler<{ blog: BlogData } | ResponseErorr> = async (
  req,
  res
) => {
  try {
    const params: {
      title: string;
      posted_at: Date;
      site_url: string;
      thumbnail_url: string;
      service_name: string;
    } = req.body;

    const { title, postedAtString, thumbnailUrl, serviceName } =
      await getOGPData(params.site_url);
    const postedAt = postedAtString
      ? new Date(postedAtString).toISOString()
      : undefined;

    const blog = await prismaClient.blog_from_manual_items.create({
      data: {
        id: uuidv4(),
        title: title || params.title,
        posted_at: postedAt || new Date(params.posted_at).toISOString(),
        site_url: params.site_url,
        thumbnail_url: thumbnailUrl || params.thumbnail_url,
        service_name: serviceName || params.service_name,
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
  } catch (e) {
    // NOTE: 現在validation エラーでどのカラムが問題であったかわからない状態だが、
    // フロントエンド側で丁寧にバリデーションする予定なのでここでは考えない
    // なお、og 取得の処理は理想的にはフロント側でフォーム補完として実装したい
    if (
      e instanceof PrismaClientKnownRequestError ||
      e instanceof PrismaClientValidationError
    ) {
      return res.status(400).json({ message: e.message });
    } else if (e instanceof RangeError) {
      // For toISOString()
      return res.status(400).json({
        message: "Argument posted_at for data.posted_at is missing or invalid.",
      });
    }
    throw e;
  }
};

// const updateBlog: NextApiHandler<{ blog: BlogData } | ResponseErorr> = async (
//   req,
//   res
// ) => {
//   const { id } = req.query;
//   const params: {
//     title: string;
//     posted_at: Date;
//     site_url: string;
//     thumbnail_url: string;
//     service_name: string;
//   } = req.body;
//   try {
//     console.log(params.posted_at);
//     const blog = await prismaClient.blog_from_manual_items.update({
//       where: { id: id as string },
//       data: {
//         title: params.title,
//         posted_at: params.posted_at
//           ? new Date(params.posted_at).toISOString()
//           : undefined,
//         site_url: params.site_url,
//         thumbnail_url: params.thumbnail_url,
//         service_name: params.service_name,
//       },
//     });
//
//     return res.status(200).json({
//       blog: {
//         id: blog.id,
//         title: blog.title,
//         postedAt: blog.posted_at!,
//         siteUrl: blog.site_url,
//         thumbbnailUrl: blog.thumbnail_url,
//         serviceName: blog.service_name,
//       },
//     });
//   } catch (e) {
//     if (
//       e instanceof PrismaClientValidationError ||
//       e instanceof PrismaClientKnownRequestError
//     ) {
//       return res.status(400).json({ message: e.message });
//     } else if (e instanceof RangeError) {
//       // For toISOString()
//       return res.status(400).json({
//         message: "Argument posted_at for data.posted_at is missing or invalid.",
//       });
//     }
//
//     throw e;
//   }
// };

const deleteBlog: NextApiHandler<void | ResponseErorr> = async (req, res) => {
  const { id } = req.query;
  try {
    const payload = await prismaClient.blog_from_manual_items.deleteMany({
      where: { id: id as string },
    });

    if (payload.count === 0)
      return res.status(404).json({ message: "blog not found" });

    return res.status(200).json();
  } catch (e) {
    if (
      e instanceof PrismaClientValidationError ||
      e instanceof PrismaClientKnownRequestError
    ) {
      return res.status(400).json({ message: e.message });
    }
    throw e;
  }
};

// TODO: create, update は未実装(site url を受け取って他のカラムはogpなどからサーバで取得したい)
export const blogHandler: {
  getBlogs: NextApiHandler<{ blogs: BlogData[] } | ResponseErorr>;
  getBlog: NextApiHandler<{ blog: BlogData } | ResponseErorr>;
  createBlog: NextApiHandler<{ blog: BlogData } | ResponseErorr>;
  //updateBlog: NextApiHandler<{ blog: BlogData } | ResponseErorr>;
  deleteBlog: NextApiHandler<void | ResponseErorr>;
} = {
  getBlogs,
  getBlog,
  createBlog,
  //updateBlog,
  deleteBlog,
};

type OGData = {
  title?: string;
  postedAtString?: string;
  thumbnailUrl?: string;
  serviceName?: string;
};

const getOGPData = async (url: string): Promise<OGData> => {
  const opts = {
    url,
  };
  let resp: OGData = {
    title: "",
    postedAtString: "",
    thumbnailUrl: "",
    serviceName: "",
  };
  await ogp.default(opts, (err, result) => {
    if (err) {
      throw err;
    }

    const thumbnailImg = (
      result as unknown as {
        ogImage: OpenGraphImage | OpenGraphImage[] | undefined;
      }
    ).ogImage;

    let thumbnailUrl = "";
    if (thumbnailImg) {
      if (Array.isArray(thumbnailImg)) {
        thumbnailUrl = thumbnailImg[0].url;
      } else {
        thumbnailUrl = thumbnailImg.url;
      }
    }

    resp = {
      title: (result as unknown as OpenGraphProperties).ogTitle,
      postedAtString: (result as unknown as OpenGraphProperties).ogDate,
      thumbnailUrl: thumbnailUrl,
      serviceName: (result as unknown as OpenGraphProperties).ogSiteName,
    };
  });

  return resp;
};
