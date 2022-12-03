import { NextLayout } from "../_app";
import { GlobalHeader } from "../../new/common/components/GlobalHeader";
import { GlobalFooter } from "../../new/common/components/GlobalFooter";

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
