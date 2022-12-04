import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { aboutData } from "../../_data";

import { About } from "./About";

type Story = ComponentStoryObj<typeof About>;
type Meta = ComponentMeta<typeof About>;

const meta: Meta = {
  component: About,
  args: {
    data: aboutData,
  },
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
};
