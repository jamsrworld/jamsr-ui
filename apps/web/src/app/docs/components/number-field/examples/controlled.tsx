"use client";

import { Description } from "jamsrui/description";
import { NumberField } from "jamsrui/number-field";
import { useState } from "react";

export const NumberFieldControlled = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (value: number | null) => {
    if (value === null) {
      return;
    }
    setValue(value);
  };
  return (
    <NumberField
      value={value}
      onValueChange={handleChange}
    >
      <NumberField.ScrubArea>Width</NumberField.ScrubArea>
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
      <Description>value is {value}</Description>
    </NumberField>
  );
};
