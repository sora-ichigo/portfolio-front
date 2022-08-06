import React from "react";
import styled from "styled-components";

import { HistoryListItemType } from "../../domain";

export const HistoryListItem: React.FC<HistoryListItemType> = ({
  title,
  subTitle,
  text,
  date,
  current,
}) => (
  <div className="relative -z-10 mb-12 rounded-md border-3 border-grey-4 px-8 py-6">
    <HistoryArrow>
      <div className="top" />
      <div className="middle" />
      <div className="bottom" />
    </HistoryArrow>

    <HistoryIcon current={current}>{date}</HistoryIcon>

    <h3 className="text-base font-bold">{title}</h3>
    <h4 className="text-xs font-bold uppercase tracking-widest text-grey-2">
      {subTitle}
    </h4>
    <p className="mt-3 font-japanese text-sm tracking-wider">{text}</p>
  </div>
);

const HistoryIcon = styled.div<{ current?: boolean }>`
  position: absolute;
  width: 58px;
  height: 58px;
  top: 34%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  color: #fff;
  font-size: 11px;
  left: -78px;
  outline: 5px solid #fff;
  background-color: ${(props) => (props.current ? "#345" : "#5BCF80")};

  @media (max-width: 768px) {
    left: -85px;
  }
`;

const HistoryArrow = styled.span`
  position: relative;
  position: absolute;
  top: 50%;
  right: 100%;
  width: 15px;
  height: 30px;
  .middle {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    height: 15px;
    border-right: solid #fff 3px;
  }
  .top {
    height: 50%;
    border-right: solid 3px #d0dadc;
    transform: rotate(50deg);
    transform-origin: 100% 0%;
  }
  .bottom {
    height: 50%;
    border-top: solid 3px #d0dadc;
    transform: rotate(40deg);
    transform-origin: 100% 0%;
  }
`;
