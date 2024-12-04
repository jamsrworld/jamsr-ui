"use client";

import { Radio, RadioGroup, type RadioGroupProps } from "@jamsr-ui/react";
import { useState } from "react";

export const RadioGroupControlled = (props: RadioGroupProps) => {
  const [value, setValue] = useState("male");
  return (
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
  );
};
