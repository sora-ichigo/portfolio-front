import React from "react";
import { IconType } from "react-icons";

export type AboutData = {
  type: "about";
  description: string;
  tweet: string;
  services: ServiceListItemType[];
  funFacts: FunFactListItemType[];
  snsAccounts: SNSAccountDataType[];
};

export type IconColorType = "red" | "blue" | "green" | "yellow";

export type ServiceListItemType = {
  icon: IconType;
  color: IconColorType;
  title: string;
  text: string;
};

export type FunFactListItemType = {
  icon: IconType;
  text: string;
};

export type SNSAccountDataType = {
  url: string;
  icon: IconType | React.FC;
};

type Props = {
  cacheData?: AboutData;
};

export const About: React.FC<Props> = (props) => {
  return (
    <>
      <div></div>
    </>
  );
};
