import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Image } from "../src/image";

const meta = {
  title: "Components/Image",
  component: Image,
  
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
