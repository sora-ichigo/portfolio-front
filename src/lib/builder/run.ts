import fs from "fs-extra";
import { getBlogItemsFromFeedURLs } from "./blogItems";

const feedURLs = [
  "https://zenn.dev/ichigo_dev/feed",
  "https://qiita.com/igsr5/feed",
];

(async function (feedURLs: string[]) {
  const blogItems = await getBlogItemsFromFeedURLs(feedURLs);

  fs.ensureDirSync("src/_data/.blogItems");
  fs.writeJsonSync("src/_data/.blogItems/data.json", blogItems);
})(feedURLs);
