import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Radio } from "../src/radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
