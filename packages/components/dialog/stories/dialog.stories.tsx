import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dialog } from "../src/dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
