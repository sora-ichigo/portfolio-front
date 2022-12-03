import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
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

SwiperCore.use([Pagination, Navigation]);

const fallback = <InternalServerError></InternalServerError>;

export type NextLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextLayout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const path = router.asPath;
  const [currentPageString, setCurrentPageString] = useState("");
  const getLayout = Component.getLayout ?? ((page) => page);

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

  return getLayout(
    <>
      <GlobalHead currentPageString={currentPageString} />
      <Sentry.ErrorBoundary fallback={fallback}>
        <Component {...pageProps} />
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
