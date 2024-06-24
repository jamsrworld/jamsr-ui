import { type Meta, type StoryObj } from "@storybook/react";
import { LinearProgress } from "../src";

const meta = {
  title: "Components/Linear Progress",
  component: LinearProgress,
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isIntermediate: true },
};

export const Value: Story = {
  args: { progress: 33 },
};
