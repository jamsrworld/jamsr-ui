import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Chip } from "../src/chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
