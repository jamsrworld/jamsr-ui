"use client";

import { Checkbox } from "ui/checkbox";
import { Field } from "ui/field";

export const CheckboxInvalid = (props: Checkbox.Props) => {
  return (
    <Field orientation="horizontal">
      <Checkbox
        isInvalid
        {...props}
      />
      <Field.Content>
        <Field.Label>Accept terms and conditions</Field.Label>
        <Field.Description>
          You must accept the terms and conditions to continue.
        </Field.Description>
      </Field.Content>
    </Field>
  );
};
