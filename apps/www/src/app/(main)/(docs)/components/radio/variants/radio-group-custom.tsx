"use client";

import {
  Radio,
  RadioGroup,
  type RadioGroupProps,
  type RadioProps,
} from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { useState } from "react";

const CustomRadio = (props: RadioProps) => {
  return (
    <Radio
      {...props}
      classNames={{
        base: cn(
          "m-0 inline-flex items-center justify-between border-2 border-divider hover:bg-content2",
          "max-w-[300px] cursor-pointer flex-row-reverse gap-4 rounded-lg p-4",
          "data-[selected=true]:border-primary",
        ),
      }}
    />
  );
};

export const RadioGroupCustom = (args: RadioGroupProps) => {
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
