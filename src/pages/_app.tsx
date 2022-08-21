import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SwiperCore, { Pagination, Navigation } from "swiper";
import * as Sentry from "@sentry/react";

import "swiper/css";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";
import "../styles/index.css";
import { InternalServerError } from "../common/components/InternalServerError";
import { GlobalHead } from "../common/components/GlobalHead";
import { mainPageList, MAIN_PAGES } from "../common/utils/mainPages";
import { Footer } from "../common/components/Footer";

SwiperCore.use([Pagination, Navigation]);

const fallback = <InternalServerError></InternalServerError>;

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const path = router.asPath;
  const [currentPageString, setCurrentPageString] = useState("");

  useEffect(() => {
    const aboutPage = mainPageList[MAIN_PAGES["ABOUT_ME"]];
    if (path === aboutPage.path) {
      setCurrentPageString(`${aboutPage.name[0].toUpperCase()}${aboutPage.name.slice(1)}`);
      return;
    }

    for (const mainPage of mainPageList) {
      if (mainPage === aboutPage) continue;

      if (path.includes(mainPage.path)) {
        setCurrentPageString(`${mainPage.name[0].toUpperCase()}${mainPage.name.slice(1)}`);
        break;
      }
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
