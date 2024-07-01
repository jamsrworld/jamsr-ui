import { type Meta, type StoryObj } from "@storybook/react";
import { Divider } from "../src";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    children: "OR",
  },
};
