import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      navy: "#334455",
      yellow: "#FAF46A",
      green: "#009966",
    },
    fonts: {
      lato: "Lato, sans-serif",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
  },
  utils: {},
});

export const defaultCss = css({
  color: "$navy",
  fontSize: "16px",
  fontFamily: "$lato",
  fontWeight: 300,
  margin: 0,
  a: {
    color: "$green",
  },
  // css reset
  "h1, h2, h3, h4, h5, h6, p": {
    lineHeight: "inherit",
    fontWeight: "inherit",
    fontFamily: "inherit",
  },
});
