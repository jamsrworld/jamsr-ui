"use client";

import { Checkbox } from "ui/checkbox";
import { Field } from "ui/field";

export const CheckboxIntermediate = (props: Checkbox.Props) => {
  return (
    <Field orientation="horizontal">
      <Checkbox
        indeterminate
        {...props}
      />
      <Field.Label>I am a checkbox</Field.Label>
    </Field>
  );
};
