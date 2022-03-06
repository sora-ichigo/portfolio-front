import React from "react";

export const InternalServerError: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "95vh" }}
    >
      <p
        className="text-center font-japanese text-3xl leading-normal tracking-wider"
        style={{ maxWidth: "80%" }}
      >
        何かしらの
        <br />
        技術的問題が起きています
      </p>
      <p className="text-2xl tracking-wider text-grey-2">
        500 INTERNAL SERVER ERROR
      </p>

      <a href="/" className="mt-8 border border-navy px-5 py-3 text-navy">
        トップページに戻る
      </a>
    </div>
  );
};
