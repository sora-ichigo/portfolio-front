import React, { useEffect, useMemo, useState } from "react";
import FlipMove from "react-flip-move";
import { FaLeaf } from "react-icons/fa";

import { GlobalCenterHeading } from "../../common/components/GlobalCenterHeading";
import { Blog as BlogType, BlogData, Data } from "../../domain";

import { BlogItem } from "./BlogItem";

export const Blog: React.FC<{ data: Data }> = ({ data }) => {
  const blogData = data as BlogData;
  let blogItems: BlogType[] = useMemo(() => [], []);
  if (typeof blogData?.blogItems !== "undefined") {
    blogItems = blogData.blogItems;
  }

  const serviceNames: Set<string> = new Set();
  serviceNames.add("ALL");
  blogItems.map((v) => serviceNames.add(v.serviceName));

  const [visibleBlogItems, setVisibleBlogItems] = useState(blogItems);
  const [currentCategory, setCurrentCategory] = useState<string>("ALL");

  useEffect(() => {
    if (currentCategory === "ALL") {
      setVisibleBlogItems(blogItems);
      return;
    } else {
      const newBlogItems = blogItems.filter((v) => v.serviceName === currentCategory);
      setVisibleBlogItems(newBlogItems);
    }
  }, [blogItems, currentCategory]);

  const CategoryBtn: React.FC<{ text: string; id: string }> = ({ text, id }) => (
    <li
      className={`${
        id === currentCategory
          ? "border-navy  bg-navy text-white hover:text-white"
          : " border-grey-4  text-grey-2 hover:text-navy"
      } my-2.5 mx-1.5 cursor-pointer rounded border px-3 py-1.5 text-xs
       tracking-widest transition hover:border-navy`}
      onClick={() => setCurrentCategory(id)}
    >
      {text}
    </li>
  );

  return (
    <>
      <div className="my-3">
        <GlobalCenterHeading text="my blog" icon={FaLeaf} />
      </div>

      <div className="my-8 flex justify-center">
        <ul className="flex flex-wrap justify-center">
          {Array.from(serviceNames.values()).map((v) => (
            <CategoryBtn text={v} id={v} key={v} />
          ))}
        </ul>
      </div>

      <FlipMove className="mb-8 grid grid-cols-1 gap-12 gap-y-16 px-2 sm:grid-cols-2 lg:grid-cols-3">
        {visibleBlogItems.map((v) => (
          <BlogItem key={v.id} blogItem={v} />
        ))}
      </FlipMove>
    </>
  );
};
