import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "../src/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};

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
      isChecked={checked}
      onCheckedChange={setChecked}
    />
  );
};

export const Controlled = {
  render: ControlledCheckbox,
};
