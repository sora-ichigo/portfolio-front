export type BlogData = {
  blogItems: Blog[];
};

type DevDate = Date;

export type Blog = {
  id: string;
  title: string;
  postedAt: Date;
  siteUrl: string;
  thumbnailUrl: string;
  serviceName: string;
};
