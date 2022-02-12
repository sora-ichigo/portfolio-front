import { SNSAccountDataType } from ".";

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
