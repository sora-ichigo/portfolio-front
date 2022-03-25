import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { FaLeaf } from "react-icons/fa";

import { GlobalCenterHeading } from "../../common/components/GlobalCenterHeading";
import { CategoryType, Data, MediaItemType, PortfolioData } from "../../domain";
import { BlogData } from "../../domain/blog";
import { BlogItem } from "./BlogItem";

export const Blog: React.FC<{ data: Data }> = ({ data }) => {
  const blogData = data as BlogData;

  return (
    <>
      <div className="my-3">
        <GlobalCenterHeading text="my blog" icon={FaLeaf} />
      </div>

      <FlipMove className="mb-8 grid grid-cols-1 gap-10 gap-y-10 px-2 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.blogItems.map((v) => (
          <BlogItem key={v.id} blogItem={v} />
        ))}
      </FlipMove>
    </>
  );
};
