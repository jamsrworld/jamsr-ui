"use client";

import { Checkbox } from "ui/checkbox";
import { Field } from "ui/field";

export const CheckboxUsage = (props: Checkbox.Props) => {
  return (
    <Field orientation="horizontal">
      <Checkbox {...props} />
      <Field.Label>Checkbox</Field.Label>
    </Field>
  );
};
