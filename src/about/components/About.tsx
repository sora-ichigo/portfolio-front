import React from "react";
import { GlobalHeading } from "../../common/components/GlobalHeading";
import { FaUserAlt, FaTwitter } from "react-icons/fa";

export const About: React.FC = () => {
  return (
    <div className="mx-auto w-11/12 py-4 md:w-5/6">
      {/* ------------------------- 
          A LITTLE ABOUT ME 
          ------------------------- */}
      <div className="px-4 pb-4">
        <div className="mt-3">
          <GlobalHeading text="A LITTLE ABOUT ME" icon={FaUserAlt} />
        </div>
        <h3 className="mt-6 mb-4 text-2xl font-light leading-snug md:mt-8 md:mb-5 md:text-3-4xl">
          Hello. I am <span className="font-bold">a writer</span>. <br />I live
          in a small town somewhere in the world. <br /> I am passionated about{" "}
          <span className="font-bold">minimalistic</span> and flat design.
        </h3>
      </div>

      {/* ------------------------- 
          LATEST TWEETS
          ------------------------- */}
      <div className="px-4 pb-4">
        <div className="mt-3 mb-6">
          <GlobalHeading text="LATEST TWEETS" icon={FaTwitter} />
        </div>
        <p className="mb-1 rounded bg-blue-light px-8 py-5 text-ex-sm leading-relaxed text-grey-3">
          Hi, we have just released a new WordPress theme for Podcasters. <br />
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
  );
};
