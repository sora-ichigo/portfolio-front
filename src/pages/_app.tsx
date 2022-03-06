/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SwiperCore, { Pagination, Navigation } from "swiper";
import * as Sentry from "@sentry/react";

import { Footer } from "../common/components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";
import "../styles/index.css";
import { InternalServerError } from "../common/components/InternalServerError";
import { GlobalHead } from "../common/components/GlobalHead";

SwiperCore.use([Pagination, Navigation]);

const fallback = <InternalServerError></InternalServerError>;

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
      <GlobalHead currentPageString={currentPageString} />
      <Sentry.ErrorBoundary fallback={fallback}>
        <Component {...pageProps} />
      </Sentry.ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
