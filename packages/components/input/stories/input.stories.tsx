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

const ControlledInput = <T extends boolean>(props: InputProps<T>) => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onValueChange={setValue}
      {...props}
    />
  );
};

export const Controlled: Story = {
  args: {
    label: "Form Label",
  },
  render: ControlledInput,
};

export const Textarea: Story = {
  args: {
    multiline: true,
    label: "Textarea Label",
    type: "checkbox",
  },
  render: ControlledInput,
};

const TestTextArea = () => {
  return (
    <Input
      label=""
      multiline
    />
  );
};
