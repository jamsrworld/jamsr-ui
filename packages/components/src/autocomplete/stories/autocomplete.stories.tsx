import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Autocomplete } from "../src/autocomplete";

const meta = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
