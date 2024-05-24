import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Avatar } from "../src/avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
