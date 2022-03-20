export type FeedSource = {
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
};

export type PostItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
