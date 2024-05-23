import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Header } from "../src/header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
