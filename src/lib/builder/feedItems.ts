import fs from "fs-extra";
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

const getFeedItemsFromFeedURLs = async (feedURLs: string[]) => {
  if (!feedURLs.length) return [];

  let feedItems: FeedItem[] = [];
  for (const url of feedURLs) {
    const feedItemLinks = await fetchFeedItemsFromURL(url);
    if (feedItems) feedItems = [...feedItemLinks, ...feedItems];
  }

  return feedItems;
};

(async function () {
  const feedURLs = [
    "https://zenn.dev/ichigo_dev/feed",
    "https://qiita.com/igsr5/feed",
  ];
  const feedItems = await getFeedItemsFromFeedURLs(feedURLs);

  fs.ensureDirSync("src/_data/.feedItems");
  fs.writeJsonSync("src/_data/.feedItems/data.json", feedItems);
})();
