import { type Meta, type StoryObj } from "@storybook/react";
import { Editor } from "../src";

const meta: Meta<typeof Editor> = {
  title: "Components/Editor",
  component: Editor,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "A custom placeholder",
  },
};

export const helperText: Story = {
  args: {
    helperText: "This field is required",
  },
};

export const isInvalid: Story = {
  args: {
    helperText: "This field is required",
    isInvalid: true,
  },
};
