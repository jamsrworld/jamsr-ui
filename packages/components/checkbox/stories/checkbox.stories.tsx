import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { Checkbox } from "../src/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,

  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "I am a checkbox",
    onCheckedChange(checked) {
      console.log(checked);
    },
  },
};

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Controlled Checkbox"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};

export const Controlled = {
  render: ControlledCheckbox,
};
