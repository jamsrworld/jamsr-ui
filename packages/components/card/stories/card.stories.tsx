import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Card } from "../src/card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};