import Parser from "rss-parser";

const parser = new Parser();

type FeedItem = { url: string; createdAt: Date };

const fetchFeedItemsFromURL = async (url: string): Promise<FeedItem[]> => {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  return feed.items
    .map((v) =>
      v.link && v.isoDate
        ? { url: v.link, createdAt: new Date(v.isoDate) }
        : null
    )
    .filter((v) => v != null) as FeedItem[];
};

export const getFeedItemsFromFeedURLs = async (feedURLs: string[]) => {
  if (!feedURLs.length) return [];

  let feedItems: FeedItem[] = [];
  for (const url of feedURLs) {
    const feedItemLinks = await fetchFeedItemsFromURL(url);
    if (feedItems) feedItems = [...feedItemLinks, ...feedItems];
  }

  return feedItems;
};
