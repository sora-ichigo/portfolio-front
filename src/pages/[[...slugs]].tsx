import { GetServerSideProps, NextPage } from "next";
import { RootMain } from "../RootMain";
import { MAIN_PAGES, MAIN_PAGES_TYPE } from "../common/utils/pages";

const Home: NextPage = () => {
  return <RootMain />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let pageType: MAIN_PAGES_TYPE = 0;

  switch (ctx.req.url) {
    case "/":
      pageType = MAIN_PAGES["ABOUT_ME"];
      break;
    case "/resume":
      pageType = MAIN_PAGES["RESUME"];
      break;
    case "/portfolio":
      pageType = MAIN_PAGES["PORTFOLIO"];
      break;
    case "/contact":
      pageType = MAIN_PAGES["CONTACT"];
      break;
    default:
      return { notFound: true };
  }
  console.log(pageType);

  return { props: { pageType } };
};
