import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Ripple } from "../src/ripple";

const meta = {
  title: "Components/Ripple",
  component: Ripple,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Ripple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
