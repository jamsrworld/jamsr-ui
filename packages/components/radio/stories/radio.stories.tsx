import { cn } from "@jamsr-ui/utils";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import type { RadioGroupProps, RadioProps } from "../src";
import { Radio, RadioGroup } from "../src";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a radio",
  },
};

export const Checked: Story = {
  args: {
    children: "This is a radio",
    defaultChecked: true,
  },
};

export const Colors: Story = {
  render: () => {
    const colors: RadioProps["color"][] = [
      "default",
      "danger",
      "primary",
      "secondary",
      "success",
      "warning",
    ];
    return (
      <RadioGroup label="Colors" name="color">
        {colors.map((color) => (
          <Radio
            key={color}
            color={color}
            name="color"
            value={color}
            className="capitalize"
          >
            {color}
          </Radio>
        ))}
      </RadioGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <RadioGroup name="size" label="Size" className="flex flex-col gap-2">
        <Radio size="sm" name="size" value="sm">
          Small
        </Radio>
        <Radio size="md" name="size" value="md">
          Medium
        </Radio>
        <Radio size="lg" name="size" value="lg">
          Large
        </Radio>
      </RadioGroup>
    );
  },
};

export const DefaultRadioGroup = {
  render: () => {
    return (
      <div>
        <RadioGroup label="Gender" name="gender" defaultValue="male">
          <Radio name="gender" value="male">
            Male
          </Radio>
          <Radio name="gender" value="female">
            Female
          </Radio>
          <Radio name="gender" value="other">
            Other
          </Radio>
        </RadioGroup>
      </div>
    );
  },
};

const RadioGroupControlledTemplate = (props: Partial<RadioGroupProps>) => {
  const [value, setValue] = useState("male");
  return (
    <div>
      <RadioGroup
        label="Gender"
        name="gender"
        value={value}
        onValueChange={setValue}
        helperText={`Selected Value: ${value}`}
        {...props}
      >
        <Radio name="gender" value="male">
          Male
        </Radio>
        <Radio name="gender" value="female">
          Female
        </Radio>
        <Radio name="gender" value="other">
          Other
        </Radio>
      </RadioGroup>
    </div>
  );
};

export const RadioGroupControlled = {
  render: RadioGroupControlledTemplate,
};

export const Invalid = {
  render: () => <RadioGroupControlledTemplate isInvalid />,
};

export const Disabled = {
  render: () => <RadioGroupControlledTemplate isDisabled />,
};

const CustomRadio = (props: RadioProps) => {
  return (
    <Radio
      {...props}
      classNames={{
        base: cn(
          "m-0 inline-flex items-center justify-between border-2 border-divider hover:bg-action-hover",
          "max-w-[300px] cursor-pointer flex-row-reverse gap-4 rounded-lg p-4",
          "data-[selected=true]:border-primary",
        ),
      }}
    />
  );
};

const RadioGroupCustomTemplate = (args: RadioGroupProps) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2">
      Selected Value: {value}
      <RadioGroup
        label="Gender"
        name="gender"
        value={value}
        onValueChange={setValue}
        {...args}
      >
        <CustomRadio value="male">Male</CustomRadio>
        <CustomRadio value="female">Female</CustomRadio>
        <CustomRadio value="none">Can' say</CustomRadio>
      </RadioGroup>
    </div>
  );
};

export const RadioGroupCustom = {
  render: RadioGroupCustomTemplate,
};

const Test = () => {
  const [value, setValue] = useState<"a" | "b">("a");
  return <RadioGroup value={value} onValueChange={setValue} />;
};
