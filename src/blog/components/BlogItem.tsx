import React, { forwardRef } from "react";

import { BlogItemType } from "../../domain/blog";
import { useRenderBlogItem } from "../hooks/useRenderBlogItem";

type Props = { blogItem: BlogItemType };

export const BlogItem: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  useRenderBlogItem
);
