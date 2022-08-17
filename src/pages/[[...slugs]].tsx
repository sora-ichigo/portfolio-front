import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RootMain } from "../RootMain";
import {
  MAIN_PAGES,
  MainPageType,
  mainPageList,
} from "../common/utils/mainPages";
import { axiosClient } from "../axios_client";
import { Blog, BlogData } from "../domain";
import { captureException } from "@sentry/nextjs";

const Home: NextPage<{ pageType: MainPageType; blogData: BlogData }> = (
  props
) => {
  return <RootMain {...props} />;
};

export default Home;

export const getStaticProps: GetStaticProps<{
  pageType: MainPageType;
  blogData: BlogData;
}> = async (ctx) => {
  let pageType: MainPageType = 0;
  let blogItems: Blog[] = [];

  let pageName: string | undefined;
  if (Array.isArray(ctx.params?.slugs)) {
    pageName = ctx.params?.slugs[0];
  } else if (typeof ctx.params?.slugs === "string") {
    pageName = ctx.params?.slugs;
  }

  switch (pageName) {
    case "":
      pageType = MAIN_PAGES["ABOUT_ME"];
      break;
    case "resume":
      pageType = MAIN_PAGES["RESUME"];
      break;
    case "portfolio":
      pageType = MAIN_PAGES["PORTFOLIO"];
      break;
    case "blog":
      pageType = MAIN_PAGES["BLOG"];
      await axiosClient
        .get<{ blogs: Blog[] }>("/api/blogs")
        .then((res) => {
          blogItems = res.data.blogs;
        })
        .catch((err) => {
          captureException(err);
        });
  }

  return {
    props: { pageType, blogData: { blogItems } },
    revalidate: 2,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const allPaths = mainPageList.map((page) => {
    return page.path;
  });
  return {
    paths: allPaths,
    fallback: true,
  };
};
