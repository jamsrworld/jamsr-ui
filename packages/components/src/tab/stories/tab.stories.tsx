import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Tab } from "../src/tab";

const meta = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
