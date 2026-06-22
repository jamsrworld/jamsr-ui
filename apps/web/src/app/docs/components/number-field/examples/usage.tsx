"use client";

import { NumberField } from "ui/number-field";

export const NumberFieldUsage = (props: NumberField.Props) => {
  return (
    <div className="w-full max-w-48">
      <NumberField
        defaultValue={100}
        {...props}
      >
        <NumberField.ScrubArea>Amount</NumberField.ScrubArea>
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
      </NumberField>
    </div>
  );
};
