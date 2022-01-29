import React from "react";
import { GlobalHeading } from "../../common/components/GlobalHeading";
import { FaUserAlt } from "react-icons/fa";

export const About: React.FC = () => {
  return (
    <div className="mx-auto w-4/5 py-4 px-8">
      <GlobalHeading text="A LITTLE ABOUT ME" icon={FaUserAlt} />
    </div>
  );
};
