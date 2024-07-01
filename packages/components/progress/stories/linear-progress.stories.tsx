import { type Meta, type StoryObj } from "@storybook/react";
import { LinearProgress } from "../src";

const meta: Meta<typeof LinearProgress> = {
  title: "Components/Linear Progress",
  component: LinearProgress,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isIntermediate: true },
};

export const Value: Story = {
  args: { progress: 33 },
};
