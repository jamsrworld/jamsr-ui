"use client";

import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";

export const CheckboxDescription = (props: Checkbox.Props) => {
  return (
    <Field orientation="horizontal">
      <Checkbox {...props} />
      <Field.Content>
        <Field.Label>Enable email notifications</Field.Label>
        <Field.Description>
          Receive updates and promotional offers via email.
        </Field.Description>
      </Field.Content>
    </Field>
  );
};
