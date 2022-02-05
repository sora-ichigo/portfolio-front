export const MAIN_PAGES = {
  ABOUT_ME: 0,
  RESUME: 1,
  PORTFOLIO: 2,
  CONTACT: 3,
} as const;

export type MAIN_PAGES_TYPE = typeof MAIN_PAGES[keyof typeof MAIN_PAGES];
