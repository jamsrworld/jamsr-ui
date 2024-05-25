import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "../src/input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Form label" },
};

const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Form Label"
      value={value}
      onValueChange={setValue}
    />
  );
};

export const Controlled: Story = {
  args: {},
  render: ControlledInput,
};
