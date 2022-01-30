import { NextPage } from "next";
import { About } from "../about/components/About";
import { Header } from "../header/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
    </>
  );
};

export default Home;
