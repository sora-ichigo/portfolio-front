import React from "react";
import { About } from "../../about/components/About";
import { Portfolio } from "../../portfolio/components/Portfolio";
import { Resume } from "../../resume/components/Resume";
import { Data } from "../../RootMain";

export const MAIN_PAGES = {
  ABOUT_ME: 0,
  RESUME: 1,
  PORTFOLIO: 2,
} as const;

let pageList: {
  name: string;
  component: React.FC<{ data: Data }>;
  path: string;
}[] = [];
pageList[MAIN_PAGES["ABOUT_ME"]] = {
  name: "about me",
  component: About,
  path: "/",
};
pageList[MAIN_PAGES["RESUME"]] = {
  name: "resume",
  component: Resume,
  path: "/resume",
};
pageList[MAIN_PAGES["PORTFOLIO"]] = {
  name: "portfolio",
  component: Portfolio,
  path: "/portfolio",
};

export const PAGE_LIST = pageList;

export type MainPageType = typeof MAIN_PAGES[keyof typeof MAIN_PAGES];

export const END_PAGE: MainPageType = (Object.keys(MAIN_PAGES).length -
  1) as MainPageType;

export const GetPageNameFromPageType = (
  pageType: MainPageType
): keyof typeof MAIN_PAGES => {
  return Object.keys(MAIN_PAGES)[pageType] as keyof typeof MAIN_PAGES;
};
