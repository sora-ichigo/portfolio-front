import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Page: NextPage = (props) => {
  return <div>Page</div>;
};

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
