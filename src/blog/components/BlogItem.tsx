import React, { forwardRef } from "react";

import { Blog } from "../../domain";
import { useRenderBlogItem } from "../hooks/useRenderBlogItem";

type Props = { blogItem: Blog };

export const BlogItem: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  useRenderBlogItem
);
