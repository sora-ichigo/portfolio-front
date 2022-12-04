import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { FaUserAlt } from "react-icons/fa";

import { SectionTitle } from "./SectionTitle";

type Story = ComponentStoryObj<typeof SectionTitle>;
type Meta = ComponentMeta<typeof SectionTitle>;

const meta: Meta = {
  component: SectionTitle,
};

export default meta;

export const LeftShow: Story = {
  decorators: [],
  args: {
    text: "A Little About Me",
    position: "left",
    icon: FaUserAlt,
  },
  play: async () => {},
};

export const CenterShow: Story = {
  decorators: [],
  args: {
    text: "A Little About Me",
    position: "center",
    icon: FaUserAlt,
  },
  play: async () => {},
};
