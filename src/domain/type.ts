import { IconType } from "react-icons";

export type Data = AboutData | ResumeData;

// -------------------
// Header
// -------------------
export type HeaderDataType = { name: string; description: string };

// -------------------
// About me
// -------------------
export type AboutData = {
  description: string;
  services: ServiceListItemType[];
  funFacts: FunFactListItemType[];
  snsAccounts: SNSAccountDataType[];
};

export type IconColorType = "red" | "blue" | "green" | "yellow";

export type ServiceListItemType = {
  icon: IconType;
  color: IconColorType;
  title: string;
  text: string;
};

export type FunFactListItemType = {
  icon: IconType;
  text: string;
};

export type SNSAccountDataType = {
  url: string;
  icon: IconType | React.FC;
};

// -------------------
// Resume
// -------------------
export type ResumeData = {
  history: HistoryListItemType[];
  skills: SkillsType;
  viewMoreAbout: ViewMoreAboutType;
};

export type HistoryListItemType = {
  title: string;
  subTitle: string;
  text: string;
  date: string;
  current?: boolean;
};

export type SkillItemType = { name: string; level: 0 | 1 | 2 | 3 | 4 };

export type SkillsType = {
  development: SkillItemType[];
  design: SkillItemType[];
};

export type ViewMoreAboutType = {
  text: string;
  sns: SNSAccountDataType[];
};
