import React from "react";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";

import { MediaItemType } from "./Portfolio";

export const MediaItemModal: React.FC<{
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
