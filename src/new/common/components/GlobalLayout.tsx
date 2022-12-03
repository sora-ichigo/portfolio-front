import { NextLayout } from "../../../pages/_app";

import { GlobalHeader } from "./GlobalHeader";
import { GlobalFooter } from "./GlobalFooter";

export const GlobalLayout: NextLayout = (page) => {
  return (
    <>
      <GlobalHeader
        data={{
          name: "Ichigo Sora",
          description: "Web Developer",
          iconUrl: "https://images.igsr5.com/l/profile.png",
        }}
      />
      {page}
      <GlobalFooter />
    </>
  );
};
