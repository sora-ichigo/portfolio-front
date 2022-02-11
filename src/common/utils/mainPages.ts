export const MAIN_PAGES = {
  ABOUT_ME: 0,
  RESUME: 1,
  PORTFOLIO: 2,
} as const;

export type MainPageType = typeof MAIN_PAGES[keyof typeof MAIN_PAGES];

export const END_PAGE: MainPageType = (Object.keys(MAIN_PAGES).length -
  1) as MainPageType;

export const GetPageNameFromPageType = (
  pageType: MainPageType
): keyof typeof MAIN_PAGES => {
  return Object.keys(MAIN_PAGES)[pageType] as keyof typeof MAIN_PAGES;
};
