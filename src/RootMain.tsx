import React from "react";
import { About } from "./about/components/About";
import { Header } from "./header/components/Header";
import { Resume } from "./resume/components/Resume";

export const RootMain: React.FC = () => (
  <>
    <Header />
    {
      //<About />
    }
    <Resume />
  </>
);
