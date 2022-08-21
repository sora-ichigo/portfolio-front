import React, { forwardRef } from "react";

import { CategoryDataType, MediaItemType } from "../../domain";
import { useRenderMediaItem } from "../hooks/useRenderMediaItem";

type Props = { mediaItem: MediaItemType; categoryData: CategoryDataType[] };

export const MediaItem: React.FC<Props> = forwardRef<HTMLDivElement, Props>(useRenderMediaItem);
