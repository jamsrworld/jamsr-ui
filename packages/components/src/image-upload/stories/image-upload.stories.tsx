import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ImageUpload } from "../src/image-upload";

const meta = {
  title: "Components/Image Upload",
  component: ImageUpload,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary" },
};
