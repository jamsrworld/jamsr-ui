"use client";

import { Checkbox } from "ui/checkbox";
import { Field } from "ui/field";

export const CheckboxDisabled = (props: Checkbox.Props) => {
  return (
    <Field orientation="horizontal">
      <Checkbox
        disabled
        {...props}
      />
      <Field.Label>Enable email notifications</Field.Label>
    </Field>
  );
};
