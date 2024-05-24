import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../src/button";

const meta = {
  title: "Components/Button",
  component: Button,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
