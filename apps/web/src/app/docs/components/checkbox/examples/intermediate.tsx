"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

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
