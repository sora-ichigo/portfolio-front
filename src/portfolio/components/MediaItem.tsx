import React, { forwardRef } from "react";
import { CategoryDataType, MediaItemType } from "../../domain/type";

import { useRenderMediaItem } from "../hooks/useRenderMediaItem";

type Props = { mediaItem: MediaItemType; categoryData: CategoryDataType[] };

export const MediaItem: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  useRenderMediaItem
);
