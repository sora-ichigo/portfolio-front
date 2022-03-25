import { getPageOGPMetadata } from "metagros";
import { BlogItemType } from "../../domain/blog";
import { getFeedItemsFromFeedURLs } from "./feedItems";

export const getBlogItemsFromFeedURLs = async (
  feedURLs: string[]
): Promise<BlogItemType[]> => {
  const feedItems = await getFeedItemsFromFeedURLs(feedURLs);

  const blogItems: BlogItemType[] = await Promise.all(
    feedItems
      .map(async (v, i) => {
        if (!(v.url && v.createdAt)) {
          return null;
        }

        // TODO: metagros must be support cjs. currently this line will happen error.
        const metadata = await getPageOGPMetadata(v.url);
        if (!(metadata.title && metadata.image)) {
          return null;
        }

        const newValue: BlogItemType = {
          id: i,
          title: metadata.title,
          link: v.url,
          thumbnailUrl: metadata.image,
          createdAt: v.createdAt,
        };

        return newValue;
      })
      .filter((v) => v) as unknown as BlogItemType[]
  );

  return blogItems;
};
