import { type Meta, type StoryObj } from "@storybook/react";
import { CircularProgress } from "../src";

const meta: Meta<typeof CircularProgress> = {
  title: "Components/Circular Progress",
  component: CircularProgress,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
