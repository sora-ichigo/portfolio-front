export type BlogData = {
  blogItems: BlogItemType[];
};

type DevDate = Date;

export type BlogItemType = {
  id: string;
  title: string;
  createdAt: DevDate;
  thumbnailUrl: string;
  link: string;
};
