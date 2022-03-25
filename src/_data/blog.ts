import { BlogData, BlogItemType } from "../domain/blog";
import data from "./.blogItems/data.json";

const serializeBlogItem = (
  blogs: {
    [key: string]: string;
  }[]
): BlogItemType[] => {
  let blogItems: BlogItemType[] = [];
  blogs.map((v, i) => {
    blogItems.push({
      id: `${i}`,
      title: v.title,
      thumbnailUrl: v.thumbnailUrl,
      createdAt: new Date(v.createdAt),
      link: v.link,
    });
  });

  return blogItems;
};

export const blogData: BlogData = {
  blogItems: serializeBlogItem(data),
};
