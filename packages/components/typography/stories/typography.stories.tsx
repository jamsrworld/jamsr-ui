import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Typography } from "../src/typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
