import { Card, CardContent } from "@jamsr-ui/card";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import type { RadioGroupItemProps } from "../src";
import { Radio, RadioGroupItem, RadioGroup as RadioGroupUI } from "../src";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "This is a radio",
  },
};

const RadioGroupTemplate = (args: RadioGroupItemProps) => {
  return (
    <RadioGroupUI>
      <RadioGroupItem {...args}>Male</RadioGroupItem>
      <RadioGroupItem {...args}>Female</RadioGroupItem>
      <RadioGroupItem {...args}>Can' say</RadioGroupItem>
    </RadioGroupUI>
  );
};

export const RadioGroup = {
  render: RadioGroupTemplate,
  args: {
    name: "gender",
  },
};

const RadioGroupCustomTemplate = (args: RadioGroupItemProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <RadioGroupUI name="gender" value={value} onChange={handleChange}>
        <RadioGroupItem value="male" as={Card} {...args}>
          <CardContent>Male</CardContent>
        </RadioGroupItem>
        <RadioGroupItem value="female" as={Card} {...args}>
          <CardContent>Female</CardContent>
        </RadioGroupItem>
        <RadioGroupItem value="none" as={Card} {...args}>
          <CardContent>Can' say</CardContent>
        </RadioGroupItem>
      </RadioGroupUI>

      <div>Selected Value: {value}</div>
    </div>
  );
};

export const RadioGroupCustom = {
  render: RadioGroupCustomTemplate,
  args: {
    name: "gender",
  },
};
