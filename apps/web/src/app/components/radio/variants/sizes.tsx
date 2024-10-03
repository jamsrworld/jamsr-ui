import { Radio, RadioGroup } from "@jamsr-ui/react";

export const RadioSizes = () => {
  return (
    <RadioGroup
      name="size"
      label="Size"
      className="flex flex-col gap-2"
    >
      <Radio
        size="sm"
        name="size"
        value="sm"
      >
        Small
      </Radio>
      <Radio
        size="md"
        name="size"
        value="md"
      >
        Medium
      </Radio>
      <Radio
        size="lg"
        name="size"
        value="lg"
      >
        Large
      </Radio>
    </RadioGroup>
  );
};
