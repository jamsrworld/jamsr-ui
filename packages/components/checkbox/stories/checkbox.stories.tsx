import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from "../src/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
