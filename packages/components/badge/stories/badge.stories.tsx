import { type Meta, type StoryObj } from "@storybook/react";
import { Badge } from "../src/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Badge" },
};
