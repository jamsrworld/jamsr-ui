import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Menu } from "../src/menu";

const meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
