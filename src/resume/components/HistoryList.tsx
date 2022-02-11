import React from "react";
import styled from "styled-components";
import { FaFlask } from "react-icons/fa";

import { HistoryListItem, HistoryListItemType } from "./HistoryListItem";

export const HistoryList: React.FC<{
  historyListProps: HistoryListItemType[];
}> = ({ historyListProps }) => (
  <div className="relative mt-5 pl-28 pb-2 sm:ml-4 md:ml-0">
    <HistoryLine />
    <h2 className="relative mb-9 text-2xl font-light tracking-widest">
      <WorkHistoryIcon>
        <FaFlask className="text-grey-4" />
      </WorkHistoryIcon>
      work history
    </h2>

    {historyListProps.map((v, i) => {
      return <HistoryListItem key={i} {...v} />;
    })}
  </div>
);

const WorkHistoryIcon = styled.div`
  font-size: 24px;
  position: absolute;
  top: -27px;
  left: -112px;
  width: 86px;
  height: 86px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border: 4px solid #f4f6f7;
  border-radius: 50%;

  @media (max-width: 768px) {
    top: -18px;
    left: -88px;
    width: 70px;
    height: 70px;
  }
`;

const HistoryLine = styled.div`
  z-index: -10;
  position: absolute;
  top: 0;
  left: 41px;
  height: 100%;
  background-color: #f4f6f7;
  width: 5px;

  @media (max-width: 768px) {
    left: 56px;
  }
`;
