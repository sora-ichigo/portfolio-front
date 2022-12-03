import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { GlobalHeader } from "./GlobalHeader";

type Story = ComponentStoryObj<typeof GlobalHeader>;
type Meta = ComponentMeta<typeof GlobalHeader>;

const meta: Meta = {
  component: GlobalHeader,
};

export default meta;

export const Default: Story = {
  decorators: [],
  args: {
    data: {
      name: "Ichigo Sora",
      description: "Software Engineer",
      iconUrl: "https://images.igsr5.com/l/profile.png",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByText("Ichigo Sora")).toBeInTheDocument();
    expect(canvas.queryByText("Software Engineer")).toBeInTheDocument();
  },
};
