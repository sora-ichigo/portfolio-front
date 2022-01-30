import React from "react";
import { IconType } from "react-icons";

type Props = { text: string; icon: IconType };

export const GlobalHeading: React.FC<Props> = ({ text, icon }) => (
  <div className="flex items-center">
    <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full border-4 border-grey-1 text-grey-4">
      {React.createElement(icon)}
    </div>
    <h2 className="pr-4 text-xs font-bold uppercase tracking-widest">{text}</h2>
    <span className="flex-1 border-t-4" />
  </div>
);
