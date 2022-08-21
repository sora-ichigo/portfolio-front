import React from "react";
import { IconType } from "react-icons";

type Props = { text: string; icon: IconType };

export const GlobalCenterHeading: React.FC<Props> = ({ text, icon }) => (
  <div className="relative flex items-center justify-center">
    <span className="absolute -z-10 w-full border-t-4 border-grey-1"></span>
    <span className="flex items-center bg-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-grey-1  text-grey-4">
        {React.createElement(icon)}
      </div>
      <span className="pl-3 pr-6 text-xs font-bold uppercase tracking-widest">{text}</span>
    </span>
  </div>
);
