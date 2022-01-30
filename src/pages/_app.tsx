import React from "react";
import "tailwindcss/tailwind.css";

import { Footer } from "../common/components/Footer";
import "../styles/index.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
