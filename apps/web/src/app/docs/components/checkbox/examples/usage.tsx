"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxUsage = (props: Checkbox.Props) => {
  return (
    <Field orientation="horizontal">
      <Checkbox {...props} />
      <Field.Label>Checkbox</Field.Label>
    </Field>
  );
};
