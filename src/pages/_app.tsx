import React from "react";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
