import { type Meta, type StoryObj } from "@storybook/react";
import { Textarea } from "../src/textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Form label" },
};