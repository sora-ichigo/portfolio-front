import React from "react";
import {
  FaUserAlt,
  FaTwitter,
  FaMagic,
  FaBurn,
  FaInstagram,
  FaRegLightbulb,
  FaPeopleArrows,
  FaHtml5,
} from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { FiType } from "react-icons/fi";
import { SiWebflow } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

import { ServiceListItemType, ServiceListItem } from "./ServiceListItem";
import { FunFactListItem, FunFactListItemType } from "./FunFactListItem";
import { GlobalHeading } from "../../common/components/GlobalHeading";

const ServicesDataList: ServiceListItemType[] = [
  {
    icon: FaHtml5,
    color: "yellow",
    title: "web design",
    text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: FiType,
    color: "blue",
    title: "type design",
    text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: SiWebflow,
    color: "green",
    title: "web design",
    text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: MdDesignServices,
    color: "red",
    title: "web design",
    text: "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
  },
];

const FunFactDataList: FunFactListItemType[] = [
  { icon: FaInstagram, text: "24000 SHOT CAPTURED" },
  { icon: FaRegLightbulb, text: "37 PROJECTS COMPLETED" },
  { icon: FaPeopleArrows, text: "87 SATISFIED CUSTOMERS" },
  { icon: RiMotorbikeFill, text: "1450 KM CYCLED" },
];

export const About: React.FC = () => {
  return (
    <div className="mx-auto w-11/12 py-4 md:w-5/6">
      {/* -------------------------
          A LITTLE ABOUT ME
          ------------------------- */}
      <div className="mt-3">
        <GlobalHeading text="A LITTLE ABOUT ME" icon={FaUserAlt} />
        <h3 className="mt-6 text-2xl font-light leading-snug md:mt-8 md:mb-5 md:text-3-4xl">
          Hello.I am <span className="font-bold">a writer</span>.<br />I live in
          a small town somewhere in the world.
          <br /> I am passionated about{" "}
          <span className="font-bold">minimalistic</span> and flat design.
        </h3>
      </div>

      {/* -------------------------
          LATEST TWEETS
          ------------------------- */}
      <div className="mt-9">
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

      {/* -------------------------
          SERVICES
          ------------------------- */}
      <div className="mt-9">
        <div className="mb-3">
          <GlobalHeading text="SERVICES" icon={FaMagic} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ServicesDataList.map((v, i) => (
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
          {FunFactDataList.map((v, i) => (
            <FunFactListItem key={i} icon={v.icon} text={v.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
