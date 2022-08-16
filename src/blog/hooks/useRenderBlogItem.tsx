import React from "react";
import Image from "next/image";
import { Blog } from "../../domain/blog";

export const useRenderBlogItem = (
  { blogItem: blogItem }: { blogItem: Blog },
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  return (
    <div
      className="max-h-sm mx-auto max-w-lg rounded border border-grey-4"
      ref={ref}
    >
      <a
        className="flex h-full flex-col items-stretch"
        href={blogItem.siteUrl}
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
        <div className="px-10 pt-7 pb-4 text-center">
          <h3 className="font-japanese text-base tracking-wider text-navy">
            {blogItem.title}
          </h3>
          <p className="text-navy" style={{ fontSize: "12px" }}>
            {blogItem.serviceName}
          </p>
          <p
            className="mt-4 uppercase text-grey-2"
            style={{ fontSize: "14px" }}
          >
            {new Intl.DateTimeFormat("en-US").format(
              new Date(blogItem.postedAt)
            )}
          </p>
        </div>
      </a>
    </div>
  );
};
