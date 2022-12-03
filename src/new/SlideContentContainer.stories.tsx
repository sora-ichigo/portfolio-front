import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { SlideContentContainer } from "./SlideContentContainer";

type Story = ComponentStoryObj<typeof SlideContentContainer>;
type Meta = ComponentMeta<typeof SlideContentContainer>;

const meta: Meta = {
  component: SlideContentContainer,
  args: {},
};

export default meta;

export const Default: Story = {
  decorators: [],
  play: async () => {},
};
