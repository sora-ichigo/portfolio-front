export type BlogData = {
  blogItems: BlogItemType[];
};

type DevDate = Date;

export type BlogItemType = {
  id: number;
  title: string;
  createdAt: DevDate;
  thumbnailUrl: string;
  link?: string;
};
