/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";

import { MediaItemType } from "./Portfolio";

export const MediaItemModal: React.FC<{
  mediaItem: MediaItemType;
  selected: boolean;
  onRequestClose: () => void;
}> = ({ mediaItem, selected, onRequestClose }) => {
  const isWindowLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: isWindowLg ? "80%" : "90%",
      height: "85%",
      posision: "relative",
    },
    overlay: {
      zIndex: "10",
    },
  };

  return (
    <Modal
      isOpen={selected}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <AiFillCloseCircle
        className="absolute hidden cursor-pointer bg-white text-7xl text-green md:block"
        style={{ top: "2%", right: "3%" }}
        onClick={onRequestClose}
      />
      <div className="mx-auto w-11/12">
        <h2 className="pt-4 pb-8 text-2xl font-bold tracking-wider md:text-3-4xl">
          {mediaItem.title}
        </h2>
        <div className="lg:grid lg:grid-cols-5 lg:gap-10">
          <div className="col-span-3">
            <div className="mb-4">
              <img src={mediaItem.imgUrl} alt="" />
            </div>
          </div>
          <div className="col-span-2">
            <h3
              className="mb-1 font-bold uppercase tracking-widest text-grey-2"
              style={{ fontSize: "13px" }}
            >
              DESCRIPTION
            </h3>
            <p className="mb-5">{mediaItem.description}</p>
            <h3
              className="mt-8 mb-1 font-bold uppercase tracking-widest text-grey-2"
              style={{ fontSize: "13px" }}
            >
              DEV Style
            </h3>
            <p className="mb-5">
              {mediaItem.devStyle === 0 ? "Single" : "Team"}
            </p>
            <h3
              className="mt-8 font-bold uppercase tracking-widest text-grey-2"
              style={{ fontSize: "13px" }}
            >
              TECHNOLOGY
            </h3>

            <ul>
              {mediaItem.tags.map((v, i) => (
                <TagItem key={i}>{v}</TagItem>
              ))}
            </ul>

            <div className="py-8">
              <a
                href={mediaItem.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block transform rounded border-2 border-grey py-4 px-6 text-xs font-bold
                 tracking-widest text-grey transition hover:border-white hover:bg-green hover:text-white sm:px-7"
              >
                LAUNCH PROJECT
              </a>
            </div>

            <AiFillCloseCircle
              className="block cursor-pointer bg-white text-7xl text-green md:hidden"
              onClick={onRequestClose}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

const TagItem = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 12px;
  padding-right: 10px;
  background-color: #eaeeef;
  font-size: 12px;
  line-height: 30px;
  border-radius: 0 2px 2px 0;
  margin-top: 12px;
  margin-left: 11px;
  margin-right: 10px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -11px;
    border-color: transparent;
    border-right-color: #eaeeef;
    border-style: solid;
    border-width: 15px 11px 15px 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 11px;
    left: 2px;
    background-color: #fff;
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
`;
