import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Progress } from "../src/progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
