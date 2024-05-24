import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Skeleton } from "../src/skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
