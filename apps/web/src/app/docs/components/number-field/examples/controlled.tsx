"use client";

import { Description } from "jamsrui/description";
import { NumberField } from "jamsrui/number-field";
import { useState } from "react";

export const NumberFieldControlled = (props: NumberField.Props) => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (val: number | null) => {
    if (val === null) {
      return;
    }
    setValue(val);
  };
  return (
    <div className="w-full max-w-48">
      <NumberField
        value={value}
        onValueChange={handleChange}
        {...props}
      >
        <NumberField.ScrubArea>Width</NumberField.ScrubArea>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
        <Description>value is {value}</Description>
      </NumberField>
    </div>
  );
};
