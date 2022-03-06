/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";

export const GlobalHead: React.FC<{ currentPageString: string }> = ({
  currentPageString,
}) => (
  <Head>
    <title>
      {currentPageString !== "" ? `${currentPageString} | ` : ""}Sora Ichigo's
      HP
    </title>
    <meta
      key="og:title"
      property="og:title"
      content="Sora Ichigo の HP サイト"
    />
    <meta property="og:type" content="website" />
    <meta
      key="og:description"
      property="og:description"
      content="愛知県に住んでいる情報工学生です。ソフトウェア開発を通じて課題を解決するのが好きです。普段はコードを書いたり、バイクに乗ったり、温泉に入ったりしています。"
    />
    <meta
      key="og:image"
      property="og:image"
      content="https://images.igsr5.com/l/afjife.png"
    />
    <meta
      key="twitter:card"
      name="twitter:card"
      content="summary_large_image"
    />
    <meta key="twitter:site" name="twitter:site" content="@igsr5_" />
    <link rel="icon" href="https://images.igsr5.com/l/riujrfe.png" />
  </Head>
);
