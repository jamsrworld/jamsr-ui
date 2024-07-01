import { type Meta, type StoryObj } from "@storybook/react";
import { Chip } from "../src/chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
