import React from "react";
import { FunFactListItemType } from "../../domain/type";

export const FunFactListItem: React.FC<FunFactListItemType> = ({
  icon,
  text,
}) => (
  <div className="flex items-center pt-8 pb-12 lg:items-stretch">
    <div className="mr-1 text-7xl">{React.createElement(icon)}</div>
    <h3 className="text-2xl font-light uppercase lg:mt-5">{text}</h3>
  </div>
);
