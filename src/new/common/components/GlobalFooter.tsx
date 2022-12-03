import React from "react";

import { styled } from "../../stitches.config";

export const GlobalFooter: React.FC = () => (
  <Footer>
    © 2022 @igsr5, the design is inspierd by{" "}
    <a href="https://themeforest.net/item/cvcard-wp-responsive-vcard-theme/7476245" target="_blank" rel="noreferrer">
      cvCard WP
    </a>
    .
  </Footer>
);

const Footer = styled("footer", {
  margin: "8px 0",
  textAlign: "center",
  fontSize: "12px",
});
