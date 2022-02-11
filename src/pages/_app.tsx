import React from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import { Footer } from "../common/components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

SwiperCore.use([Pagination, Navigation]);

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
