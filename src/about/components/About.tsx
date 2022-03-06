import React from "react";
import { FaUserAlt, FaTwitter, FaMagic, FaBurn } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

import { ServiceListItem } from "./ServiceListItem";
import { FunFactListItem } from "./FunFactListItem";
import { GlobalHeading } from "../../common/components/GlobalHeading";
import { StrWithBr } from "../../common/components/StrWithBr";
import { AboutData, Data } from "../../domain";

export const About: React.FC<{ data: Data }> = ({ data }) => {
  const aboutData: AboutData = data as AboutData;
  return (
    <>
      <button
        onClick={() => {
          throw new Error("test");
        }}
      >
        click
      </button>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* -------------------------
        A LITTLE ABOUT ME
        ------------------------- */}
        <div className="col-span-2 mt-3">
          <GlobalHeading text="A littel about me" icon={FaUserAlt} />
          <h3 className="mt-6 font-japanese text-xl font-light leading-10 md:mt-8 md:mb-5">
            {StrWithBr(aboutData.description)}
          </h3>
        </div>

        {/* -------------------------
        A RESENT TWEET
        ------------------------- */}
        <div className="mt-9 lg:mt-0">
          <div className="mt-3 mb-6">
            <GlobalHeading text="A resent tweet" icon={FaTwitter} />
          </div>
          <p className="mb-1 break-words rounded bg-blue-light px-8 py-5 font-japanese text-ex-sm leading-relaxed text-grey-3">
            最近、自分的最強の画像サーバを作りはじめました。
            このサイトの開発でめちゃくちゃ役に立ちました。
            <br />
            <a
              href="https://zenn.dev/ichigo_dev/articles/b435fba30a73e23e78ad
"
            >
              https://zenn.dev/ichigo_dev/articles/b435fba30a73e23e78ad
            </a>
          </p>
          <p
            className="text-center tracking-widest"
            style={{ fontSize: "10px" }}
          >
            POSTED ON FEB 26, 2022
          </p>
        </div>
      </div>

      {/* -------------------------
        Skills
        ------------------------- */}
      <div className="mt-9">
        <div className="mb-3">
          <GlobalHeading text="Skills" icon={FaMagic} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutData.services.map((v, i) => (
            <ServiceListItem
              key={i}
              icon={v.icon}
              color={v.color}
              title={v.title}
              text={v.text}
            />
          ))}
        </div>
      </div>

      {/* -------------------------
        FUN FACT
        ------------------------- */}
      <div className="mt-9">
        <div className="mb-3">
          <GlobalHeading text="Fun fact" icon={FaBurn} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutData.funFacts.map((v, i) => (
            <FunFactListItem key={i} icon={v.icon} text={v.text} />
          ))}
        </div>
      </div>

      {/* -------------------------
        SNS ACCOUNT
        ------------------------- */}
      <div className="mt-9">
        <div className="mb-3">
          <GlobalHeading text="SNS account" icon={IoShareSocialSharp} />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {aboutData.snsAccounts.map((v, i) => (
            <div key={i} className="mx-auto pt-6 pb-12 text-7xl">
              <a className="text-navy" href={v.url} target="_blunk">
                {React.createElement(v.icon)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
