import { type Meta, type StoryObj } from "@storybook/react";
import { Editor } from "../src";

const meta: Meta<typeof Editor> = {
  title: "Components/Editor",
  component: Editor,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  return <Editor />;
};

export const Default: Story = {
  render: Template,
};