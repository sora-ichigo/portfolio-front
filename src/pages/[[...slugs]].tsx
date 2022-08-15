import { GetServerSideProps, NextPage } from "next";
import { RootMain } from "../RootMain";
import { MAIN_PAGES, MainPageType } from "../common/utils/mainPages";
import { axiosClient } from "../axios_client";
import { Blog, BlogData } from "../domain";

const Home: NextPage<{ pageType: MainPageType; blogData: BlogData }> = (
  props
) => {
  return <RootMain {...props} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  pageType: MainPageType;
  blogData: BlogData;
}> = async (ctx) => {
  let pageType: MainPageType = 0;
  let blogItems: Blog[] = [];
  switch (ctx.req.url?.split("?")[0]) {
    case "/":
      pageType = MAIN_PAGES["ABOUT_ME"];
      break;
    case "/resume":
      pageType = MAIN_PAGES["RESUME"];
      break;
    case "/portfolio":
      pageType = MAIN_PAGES["PORTFOLIO"];
      break;
    case "/blog":
      pageType = MAIN_PAGES["BLOG"];
      await axiosClient
        .get<{ blogs: Blog[] }>("/api/blogs")
        .then((res) => {
          blogItems = res.data.blogs;
        })
        .catch((err) => {});
      console.log(blogItems);
      break;
    default:
      return { notFound: true };
  }

  return { props: { pageType, blogData: { blogItems } } };
};
