import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "../src/select";

const meta = {
  title: "Components/Select",
  component: Select,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
