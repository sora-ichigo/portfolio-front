import * as NextImage from "next/image";
import React from "react";

import { styled, defaultCss } from "../src/new/stitches.config";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    breakpoints: {
      breakpointNames: {
        sm: "640",
        md: "768",
      },
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <Base>
        <Story />
      </Base>
    );
  },
];

const Base = styled("div", {
  ...defaultCss,
});
