import React from "react";
import styled from "styled-components";

type SwiperOverlayProps = {
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  moveSlide: (isNext: boolean, isPrev: boolean) => void;
};

export const SwiperOverlay: React.FC<SwiperOverlayProps> = ({
  isNext,
  isPrev,
  moveSlide,
}) => {
  if (isNext || isPrev)
    return <OverlayDiv onClick={() => moveSlide(isNext, isPrev)} />;
  return <></>;
};

const OverlayDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #ffffff9d;
  z-index: 99999;
`;
