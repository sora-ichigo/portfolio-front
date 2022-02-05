import React from "react";
import { About } from "./about/components/About";
import {
  GetPageNameFromPageType,
  MainPageType,
  MAIN_PAGES,
} from "./common/utils/mainPages";
import { Header } from "./header/components/Header";
import { Resume } from "./resume/components/Resume";

const renderMainContent = (pageType: MainPageType): React.ReactNode => {
  switch (GetPageNameFromPageType(pageType)) {
    case "ABOUT_ME":
      return <About />;
    case "RESUME":
      return <Resume />;
    case "PORTFOLIO":
      return <About />;
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
    {renderMainContent(pageType)}
  </>
);
