import { BlogData, BlogItemType } from "../domain/blog";

const serializeBlogItem = (
  posts: {
    [key: string]: string;
  }[]
): BlogItemType[] => {
  let blogItems: BlogItemType[] = [];
  posts.map((v, i) => {
    blogItems.push({
      id: i,
      title: v.title,
      thumbnailUrl: v.thumbnailUrl,
      createdAt: new Date(v.createdAt),
      link: v.link,
    });
  });

  return blogItems;
};

export const blogData: BlogData = {
  blogItems: [] as BlogItemType[],
};
