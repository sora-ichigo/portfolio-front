import React from "react";
import { FaUserAlt, FaTwitter, FaMagic, FaBurn } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

import { ServiceListItem } from "./ServiceListItem";
import { FunFactListItem } from "./FunFactListItem";
import { GlobalHeading } from "../../common/components/GlobalHeading";
import { StrWithBr } from "../../common/components/StrWithBr";
import { AboutData, Data } from "../../domain/type";

export const About: React.FC<{ data: Data }> = ({ data }) => {
  const aboutData: AboutData = data as AboutData;
  return (
    <>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* -------------------------
        A LITTLE ABOUT ME
        ------------------------- */}
        <div className="col-span-2 mt-3">
          <GlobalHeading text="A LITTLE ABOUT ME" icon={FaUserAlt} />
          <h3 className="mt-6 text-2xl font-light leading-snug md:mt-8 md:mb-5 md:text-3-4xl">
            {StrWithBr(aboutData.description)}
          </h3>
        </div>

        {/* -------------------------
        LATEST TWEETS
        ------------------------- */}
        <div className="mt-9 lg:mt-0">
          <div className="mt-3 mb-6">
            <GlobalHeading text="LATEST TWEETS" icon={FaTwitter} />
          </div>
          <p className="mb-1 rounded bg-blue-light px-8 py-5 text-ex-sm leading-relaxed text-grey-3">
            Hi, we have just released a new WordPress theme for Podcasters.
            <br />
            <a href="#">https://twitter.com/hashtag/wordpress?src=hash</a>{" "}
            <a href="#">#wordpress</a> <a href="#">#podcast</a>
            <a href="#">#audio</a> <a href="#">#podcaster</a>{" "}
            <a href="#">#webdesign</a>
          </p>
          <p
            className="text-center tracking-widest"
            style={{ fontSize: "10px", color: "#ccc" }}
          >
            POSTED ON JAN 23, 2021
          </p>
        </div>
      </div>

      {/* -------------------------
        SERVICES
        ------------------------- */}
      <div className="mt-9">
        <div className="mb-3">
          <GlobalHeading text="SERVICES" icon={FaMagic} />
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
          <GlobalHeading text="FUN FACT" icon={FaBurn} />
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
          <GlobalHeading text="SNS ACCOUNT" icon={IoShareSocialSharp} />
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
