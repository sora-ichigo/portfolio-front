import { GetStaticPaths, GetStaticProps } from "next";

import { SlideContentContainer } from "../../new/SlideContentContainer";
import { NextPageWithLayout } from "../_app";

import { Layout } from "./layout";

const Page: NextPageWithLayout = (props) => {
  return <SlideContentContainer />;
};

Page.getLayout = Layout;

export default Page;

const paths = ["/new", "/new/resume", "/new/portfolio", "/new/blog"];

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
    revalidate: 2,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths,
    fallback: true,
  };
};
