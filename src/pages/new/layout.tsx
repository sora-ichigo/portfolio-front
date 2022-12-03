import { NextLayout } from "../_app";
import { GlobalFooter } from "../../common/components/GlobalFooter";
import { GlobalHeader } from "../../new/common/components/GlobalHeader";

export const Layout: NextLayout = (page) => {
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
