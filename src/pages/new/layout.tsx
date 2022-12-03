import { NextLayout } from "../_app";
import { Footer } from "../../common/components/Footer";

export const Layout: NextLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
