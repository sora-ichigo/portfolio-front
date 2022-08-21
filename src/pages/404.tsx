import React from "react";
import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center" style={{ height: "95vh" }}>
      <p className="text-center font-japanese text-3xl leading-normal tracking-wider" style={{ maxWidth: "80%" }}>
        お探しのページは
        <br />
        見つかりませんでした
      </p>
      <p className="text-2xl tracking-wider text-grey-2">404 NOT FOUND</p>

      <a href="/" className="mt-8 border border-navy px-5 py-3 text-navy">
        トップページに戻る
      </a>
    </div>
  );
};

export default Custom404;
