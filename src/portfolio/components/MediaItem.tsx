/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";

import { MediaItemType } from "./Portfolio";
import { useRenderMediaItem } from "../hooks/useRenderMediaItem";

type Props = { mediaItem: MediaItemType };

export const MediaItem: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  useRenderMediaItem
);
