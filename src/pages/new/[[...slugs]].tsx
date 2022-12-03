import { GetStaticPaths, GetStaticProps } from "next";

import { NextPageWithLayout } from "../_app";

import { Layout } from "./layout";

const Page: NextPageWithLayout = (props) => {
  return <div>Page</div>;
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
