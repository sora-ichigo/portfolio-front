import React from "react";
import Image from "next/image";
import { BlogItemType } from "../../domain/blog";

export const useRenderBlogItem = (
  { blogItem: blogItem }: { blogItem: BlogItemType },
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  return (
    <div className="mx-auto rounded border border-grey-4" ref={ref}>
      <a
        className="flex h-full flex-col items-stretch"
        href={blogItem.link}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={blogItem.thumbnailUrl}
          alt={blogItem.title}
          className="h-full w-full object-cover transition hover:opacity-50"
          width={1200}
          height={630}
        />
        <div className="px-10 py-7 text-center">
          <h3 className="font-japanese text-sm tracking-wider text-navy">
            {blogItem.title}
          </h3>
        </div>
      </a>
    </div>
  );
};
