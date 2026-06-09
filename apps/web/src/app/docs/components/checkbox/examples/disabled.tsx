"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

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
