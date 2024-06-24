import { type Meta, type StoryObj } from "@storybook/react";
import { CircularProgress } from "../src";

const meta = {
  title: "Components/Circular Progress",
  component: CircularProgress,
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
