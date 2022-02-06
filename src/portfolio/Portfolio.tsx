import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Container } from "../common/components/Container";

export const Portfolio: React.FC = () => {
  return (
    <div className="my-3">
      <div className="relative flex items-center justify-center">
        <span className="absolute -z-10 w-full border-t-4 border-grey-1"></span>
        <span className="flex items-center bg-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-grey-1  text-grey-4">
            <FaLeaf />
          </div>
          <span className="pl-3 pr-6 text-xs font-bold uppercase tracking-widest">
            my works
          </span>
        </span>
      </div>
    </div>
  );
};
