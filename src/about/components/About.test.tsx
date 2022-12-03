import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as stories from "./About.stories";

const { ...targetStories } = composeStories(stories);

const targetComponent = __filename.slice(__dirname.length + 1).split(".")[0];
describe(targetComponent, () => {
  const testCase = Object.values(targetStories).map((Story) => [Story.storyName, Story] as const);

  test.each(testCase)("renders %s", async (_, Story) => {
    window.scrollTo ??= jest.fn();
    const tree = render(<Story />);
    await Story.play({ canvasElement: tree.container });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});
