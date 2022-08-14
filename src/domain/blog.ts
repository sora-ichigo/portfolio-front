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

export type Blog = {
  id: string;
  title: string;
  postedAt: Date;
  siteUrl: string;
  thumbbnailUrl: string;
  serviceName: string;
};
