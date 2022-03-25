export type BlogData = {
  blogItems: BlogItemType[];
};

type DevDate = Date;

export type BlogItemType = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: DevDate;
  externalUrl?: string;
};
