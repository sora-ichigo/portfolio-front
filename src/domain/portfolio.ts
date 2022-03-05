export type PortfolioData = {
  categoryData: CategoryDataType[];
  mediaItems: MediaItemType[];
};

export const CATEGORY = {
  BACKEND: 0,
  FRONTEND: 1,
  INFRASTRUCTURE: 2,
  CODING: 3,
} as const;
export type CategoryType = -1 | typeof CATEGORY[keyof typeof CATEGORY];

export type CategoryDataType = { name: string; id: CategoryType };

// 開発スタイル: 0 が個人, 1 がチーム, 2 がインターン
type DevStyle = 0 | 1 | 2;
export const DEV_STYLE = ["個人開発", "チーム開発", "インターン開発"];

let date = new Date("2021-08");
type DevDate = Date;

export type MediaItemType = {
  id: number;
  title: string;
  categoryID: CategoryType;
  thumbnailUrl: string;
  imgUrl: string;
  description: string;
  devStyle: DevStyle;
  devDate: DevDate;
  tags: string[];
  externalUrl?: string;
};
