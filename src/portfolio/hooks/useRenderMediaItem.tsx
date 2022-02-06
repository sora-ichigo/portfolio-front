/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Modal from "react-modal";

import { GetCategoryName, MediaItemType } from "../components/Portfolio";

export const useRenderMediaItem = (
  { id, title, categoryID, imgUrl }: MediaItemType,
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div
        className="mx-auto rounded border border-grey-4"
        ref={ref}
        onClick={() => setSelected(true)}
      >
        <a href={`#?${id}`}>
          <img
            src={imgUrl}
            alt={title}
            className="transition hover:opacity-50"
          />
        </a>
        <div className="px-10 py-7 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider">
            {title}
          </h3>
          <p className="uppercase text-grey-2" style={{ fontSize: "13px" }}>
            {GetCategoryName(categoryID)}
          </p>
        </div>
      </div>

      <Modal isOpen={selected}>
        <button>the modal</button>
      </Modal>
    </>
  );
};
