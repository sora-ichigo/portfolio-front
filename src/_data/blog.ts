import { BlogData, BlogItemType } from "../domain/blog";

export const blogData: BlogData = {
  blogItems: [
    {
      id: 0,
      title: "wantedly.com を Next.js に移行した話",
      thumbnailUrl: "https://images.igsr5.com/l/fljdfgk.jpeg",
      createdAt: new Date("2021-08"),
      link: "https://www.wantedly.com/companies/wantedly/post_articles/359076",
    },
    {
      id: 1,
      title: "五目並べアプリ",
      thumbnailUrl: "https://images.igsr5.com/l/ngmpRo2.png",
      createdAt: new Date("2021-06"),
      link: "https://www.wantedly.com/companies/wantedly/post_articles/359076",
    },
    {
      id: 2,
      title: "ポートフォリオサイト",
      thumbnailUrl: "https://images.igsr5.com/l/afjife.png",
      createdAt: new Date("2022-02"),
      link: "https://www.wantedly.com/companies/wantedly/post_articles/359076",
    },
  ].sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    } else if (a.createdAt === b.createdAt) {
      return 0;
    } else {
      return 1;
    }
  }) as BlogItemType[],
};
