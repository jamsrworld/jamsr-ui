import { type Meta, type StoryObj } from "@storybook/react";
import { Radio, type RadioProps } from "../src";

const meta = {
  title: "Components/Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: RadioProps) => (
  <Radio {...props}>This is a radio</Radio>
);
export const Primary: Story = {
  render: Template,
};
