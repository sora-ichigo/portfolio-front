import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { About } from "./About";

type Story = ComponentStoryObj<typeof About>;
type Meta = ComponentMeta<typeof About>;

const meta: Meta = {
  component: About,
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
};
