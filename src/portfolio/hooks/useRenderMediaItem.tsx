import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { getCategoryName } from "../../common/utils/getCategoryName";
import { CategoryDataType, MediaItemType } from "../../domain";
import { MediaItemModal } from "../components/MediaItemModal";

export const useRenderMediaItem = (
  { mediaItem, categoryData }: { mediaItem: MediaItemType; categoryData: CategoryDataType[] },
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  const router = useRouter();
  const [selected, setSelected] = useState(false);

  // TODO: もし ?item=OO の指定があったらモーダルを表示する

  const onRequestClose = () => {
    setSelected(false);
    router.push("/portfolio", undefined, { shallow: true });
  };

  return (
    <>
      <div
        className="max-h-sm mx-auto max-w-xl rounded border border-grey-4"
        ref={ref}
        onClick={() => setSelected(true)}
      >
        <Link href={`/portfolio?item=${mediaItem.id}`} shallow>
          <a className="flex h-full flex-col items-stretch">
            <Image
              src={mediaItem.thumbnailUrl}
              alt={mediaItem.title}
              className="h-full w-full object-cover transition hover:opacity-50"
              width={1280}
              height={800}
            />
            <div className="px-10 py-7 text-center">
              <h3 className="font-japanese text-base tracking-wider text-navy">{mediaItem.title}</h3>
              <p className="uppercase text-grey-2" style={{ fontSize: "12px" }}>
                {getCategoryName(mediaItem.categoryID, categoryData)}
              </p>
            </div>
          </a>
        </Link>
      </div>

      <MediaItemModal mediaItem={mediaItem} selected={selected} onRequestClose={onRequestClose} />
    </>
  );
};
