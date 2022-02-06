/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";

import { GetCategoryName, MediaItemType } from "../components/Portfolio";

export const useRenderMediaItem = (
  { mediaItem }: { mediaItem: MediaItemType },
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
        className="mx-auto rounded border border-grey-4"
        ref={ref}
        onClick={() => setSelected(true)}
      >
        <Link href={`/portfolio?item=${mediaItem.id}`} shallow>
          <a>
            <img
              src={mediaItem.thumbnailUrl}
              alt={mediaItem.title}
              className="transition hover:opacity-50"
            />
          </a>
        </Link>
        <div className="px-10 py-7 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider">
            {mediaItem.title}
          </h3>
          <p className="uppercase text-grey-2" style={{ fontSize: "13px" }}>
            {GetCategoryName(mediaItem.categoryID)}
          </p>
        </div>
      </div>

      <MediaItemModal
        mediaItem={mediaItem}
        selected={selected}
        onRequestClose={onRequestClose}
      />
    </>
  );
};

const MediaItemModal: React.FC<{
  mediaItem: MediaItemType;
  selected: boolean;
  onRequestClose: () => void;
}> = ({ selected, onRequestClose }) => {
  const isWindowMd = useMediaQuery({ query: "(min-width: 768px)" });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: isWindowMd ? "80%" : "90%",
      height: "70%",
    },
  };

  return (
    <Modal
      isOpen={selected}
      onRequestClose={() => onRequestClose()}
      style={customStyles}
    >
      <button>the modal</button>
    </Modal>
  );
};
