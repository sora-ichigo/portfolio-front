/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";

import { MediaItemType } from "./Portfolio";
import { useRenderMediaItem } from "../hooks/useRenderMediaItem";

export const MediaItem: React.FC<MediaItemType> = forwardRef<
  HTMLDivElement,
  MediaItemType
>(useRenderMediaItem);
