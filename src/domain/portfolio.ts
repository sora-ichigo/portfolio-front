export type PortfolioData = {
  categoryData: CategoryDataType[];
  mediaItems: MediaItemType[];
};

export const CATEGORY = {
  CODING: 0,
  DESIGN: 1,
  LOGO: 2,
} as const;
export type CategoryType = -1 | typeof CATEGORY[keyof typeof CATEGORY];

export type CategoryDataType = { name: string; id: CategoryType };

// 開発スタイル: 0 が個人, 1 がチーム
type DevStyle = 0 | 1;

export type MediaItemType = {
  id: number;
  title: string;
  categoryID: CategoryType;
  thumbnailUrl: string;
  imgUrl: string;
  description: string;
  devStyle: DevStyle;
  tags: string[];
  externalUrl: string;
};
