import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import SwiperCore, { Pagination, Navigation } from "swiper";
import * as Sentry from "@sentry/react";

import "swiper/css";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

import { InternalServerError } from "../common/components/InternalServerError";
import { GlobalHead } from "../common/components/GlobalHead";

export type NextLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextLayout;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

SwiperCore.use([Pagination, Navigation]);
const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <GlobalHead title="Sora Ichigo's HP" />
      <Sentry.ErrorBoundary fallback={<InternalServerError />}>
        <Component {...pageProps} />
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
