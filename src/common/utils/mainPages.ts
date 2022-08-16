import React from "react";
import { About } from "../../about/components/About";
import { Data } from "../../domain";
import { Portfolio } from "../../portfolio/components/Portfolio";
import { Resume } from "../../resume/components/Resume";
import { Blog } from "../../blog/components/Blog";

export const MAIN_PAGES = {
  ABOUT_ME: 0,
  RESUME: 1,
  PORTFOLIO: 2,
  BLOG: 3,
} as const;

export let mainPageList: {
  name: string;
  headerName: string;
  component: React.FC<{ data: Data }>;
  path: string;
}[] = [];
mainPageList[MAIN_PAGES["ABOUT_ME"]] = {
  name: "about",
  headerName: "about me",
  component: About,
  path: "/",
};
mainPageList[MAIN_PAGES["RESUME"]] = {
  name: "resume",
  headerName: "resume",
  component: Resume,
  path: "/resume",
};
mainPageList[MAIN_PAGES["PORTFOLIO"]] = {
  name: "portfolio",
  headerName: "portfolio",
  component: Portfolio,
  path: "/portfolio",
};
mainPageList[MAIN_PAGES["BLOG"]] = {
  name: "blog",
  headerName: "blog",
  component: Blog,
  path: "/blog",
};

export type MainPageType = typeof MAIN_PAGES[keyof typeof MAIN_PAGES];

export const END_PAGE: MainPageType = (Object.keys(MAIN_PAGES).length -
  1) as MainPageType;

export const GetPageNameFromPageType = (
  pageType: MainPageType
): keyof typeof MAIN_PAGES => {
  return Object.keys(MAIN_PAGES)[pageType] as keyof typeof MAIN_PAGES;
};
