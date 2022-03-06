/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SwiperCore, { Pagination, Navigation } from "swiper";

import { Footer } from "../common/components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

SwiperCore.use([Pagination, Navigation]);

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const path = router.asPath;
  const [currentPageString, setCurrentPageString] = useState("");

  useEffect(() => {
    const url = path.split("?");
    const pageType = url[0].split("/");
    switch (pageType[1]) {
      case "":
        setCurrentPageString("About");
        break;
      case "resume":
        setCurrentPageString("Resume");
        break;
      case "portfolio":
        setCurrentPageString("Portfolio");
        break;
    }
  }, [path]);

  return (
    <>
      <Head>
        <title>
          {currentPageString !== "" ? `${currentPageString} | ` : ""}Sora
          Ichigo's HP
        </title>
        <link rel="icon" href="https://images.igsr5.com/l/riujrfe.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
