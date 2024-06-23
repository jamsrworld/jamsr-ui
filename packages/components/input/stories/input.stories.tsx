import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input, type InputProps } from "../src/input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Form label" },
};

const ControlledInput = (props: InputProps) => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onValueChange={setValue}
      {...props}
    />
  );
};

export const Controlled = {
  render: ControlledInput,
};
