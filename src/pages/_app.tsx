import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
