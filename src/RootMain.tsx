import React from "react";

import {
  GetPageNameFromPageType,
  MainPageType,
} from "./common/utils/mainPages";
import { About } from "./about/components/About";
import { Header } from "./header/components/Header";
import { Portfolio } from "./portfolio/Portfolio";
import { Resume } from "./resume/components/Resume";
import { Container } from "./common/components/Container";

const renderMainContent = (pageType: MainPageType): React.ReactNode => {
  switch (GetPageNameFromPageType(pageType)) {
    case "ABOUT_ME":
      return <About />;
    case "RESUME":
      return <Resume />;
    case "PORTFOLIO":
      return <Portfolio />;
    case "CONTACT":
      return <About />;
    default:
      return <About />;
  }
};

export const RootMain: React.FC<{ pageType: MainPageType }> = ({
  pageType,
}) => (
  <>
    <Header pageType={pageType} />
    <Container>{renderMainContent(pageType)}</Container>
  </>
);
