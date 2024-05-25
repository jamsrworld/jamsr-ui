import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CircularProgress, LinearProgress as LinearProgressUI } from "../src";

const meta = {
  title: "Components/Progress",
  component: CircularProgress,

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const LinearProgress: Story = {
  args: {},
  render: () => {
    return (
      <div className="grid gap-2">
        <LinearProgressUI progress={90} />
        <LinearProgressUI isIntermediate />
      </div>
    );
  },
};
