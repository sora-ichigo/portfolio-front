import React from "react";
import styled from "styled-components";
import { FaFlask } from "react-icons/fa";

import { HistoryListItemType } from "../../domain";

import { HistoryListItem } from "./HistoryListItem";

export const HistoryList: React.FC<{
  historyListProps: HistoryListItemType[];
}> = ({ historyListProps }) => (
  <HistoryWrapper>
    <HistoryLine />
    <h2 className="relative mb-9 text-2xl font-light tracking-widest">
      <WorkHistoryIcon>
        <FaFlask className="text-grey-4" />
      </WorkHistoryIcon>
      <div className="ml-4">work history</div>
    </h2>

    {historyListProps.map((v, i) => {
      return <HistoryListItem key={i} {...v} />;
    })}
  </HistoryWrapper>
);

const HistoryWrapper = styled.div`
  position: relative;
  margin-top: 1.25rem;
  padding-bottom: 0.5rem;
  @media (min-width: 768px) {
    margin-left: 0;
    padding-left: 5.3rem;
  }
  @media (min-width: 640px) {
    margin-left: 1rem;
  }
`;

const WorkHistoryIcon = styled.div`
  font-size: 24px;
  position: absolute;
  top: -27px;
  left: -88px;
  width: 86px;
  height: 86px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border: 4px solid #f4f6f7;
  border-radius: 50%;
  margin-right: 1rem;

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
  left: 36px;
  height: 100%;
  background-color: #f4f6f7;
  width: 5px;

  @media (max-width: 768px) {
    left: 40px;
  }
`;
