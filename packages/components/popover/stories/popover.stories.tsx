import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Popover } from "../src/popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
