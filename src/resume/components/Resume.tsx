import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaSuperpowers,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";

import { GlobalHeading } from "../../common/components/GlobalHeading";
import { HistoryList } from "./HistoryList";
import { HistoryListItemType } from "./HistoryListItem";
import { WtdIconForResume } from "../../common/components/WtdIcon";
import { SNSAccountDataType } from "../../about/components/About";

const historyData: HistoryListItemType[] = [
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
    current: true,
  },
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
  },
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
  },
  {
    title: "Frontend Web Developer",
    subTitle: "PIXELWARS INC.",
    text: "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2014",
  },
];

type SkillItemType = { name: string; level: 0 | 1 | 2 | 3 | 4 };

type SkillsType = { development: SkillItemType[]; design: SkillItemType[] };

const skillsData: SkillsType = {
  development: [
    {
      name: "HTML5",
      level: 4,
    },
    {
      name: "CSS3",
      level: 2,
    },
    {
      name: "TypeScript",
      level: 3,
    },
    {
      name: "Golang",
      level: 4,
    },
  ],
  design: [
    {
      name: "Fireworks",
      level: 4,
    },
    {
      name: "Photoshop",
      level: 2,
    },
    {
      name: "Illustrator",
      level: 3,
    },
  ],
};

type ViewMoreAboutType = {
  text: string;
  sns: SNSAccountDataType[];
};

const viewMoreAboutData: ViewMoreAboutType = {
  text: "You can view my LinkedIn profile. I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
  sns: [
    {
      url: "https://www.instagram.com/sora_ick12/",
      icon: FaInstagram,
    },
    {
      url: "https://twitter.com/igsr5_",
      icon: FaTwitter,
    },
    {
      url: "https://wantedly.com/id/igsr5",
      icon: WtdIconForResume,
    },
    {
      url: "https://github.com/igsr5",
      icon: FaGithub,
    },
  ],
};

export const Resume: React.FC = () => (
  <div className="lg:grid lg:grid-cols-2 lg:gap-10">
    {/* -------------------------
        HISTORY
        ------------------------- */}
    <HistoryList historyListProps={historyData} />

    <div>
      {/* -------------------------
            SKILL
            ------------------------- */}
      <div className="my-3">
        <GlobalHeading icon={FaSuperpowers} text="development Skills" />
      </div>
      <div className="pb-14 md:pb-10">
        {skillsData.development.map((v, i) => (
          <SkillBar name={v.name} level={v.level} key={i} />
        ))}
      </div>

      <div className="my-3">
        <GlobalHeading icon={AiOutlineAntDesign} text="Desgin Skills" />
      </div>
      <div className="pb-10 md:pb-14">
        {skillsData.design.map((v, i) => (
          <SkillBar name={v.name} level={v.level} key={i} />
        ))}
      </div>

      {/* -------------------------
            VIEW MORE ABOUT ME
            ------------------------- */}
      <div className="pb-12">
        <div className="my-3">
          <GlobalHeading icon={GiArmoredBoomerang} text="view more about me" />
        </div>
        <p className="mt-4 mb-4">{viewMoreAboutData.text}</p>
        <div className="flex text-4xl">
          {viewMoreAboutData.sns.map((v, i) => (
            <a className="mr-3 text-navy" href={v.url} target="_blunk" key={i}>
              {React.createElement(v.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// width is caluculated by params `level`.
// level is in 1 ~ 5.
const SkillBar: React.FC<SkillItemType> = ({ name, level }) => {
  const width = level > 4 ? 4 : level < 0 ? 0 : 20 + level * 20;
  return (
    <div className="mt-5 w-full  tracking-widest text-white">
      <span
        className="flex items-center rounded-md bg-green pl-4 font-bold"
        style={{ fontSize: "11px", width: `${width}%`, height: "36px" }}
      >
        {name}
      </span>
    </div>
  );
};
