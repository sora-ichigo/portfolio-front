import React from "react";
import { About } from "./about/components/About";
import { Header } from "./header/components/Header";

export const RootMain: React.FC = () => (
  <>
    <Header />
    <About />
  </>
);
