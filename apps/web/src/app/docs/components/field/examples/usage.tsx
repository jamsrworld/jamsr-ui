"use client";

import { Field } from "jamsrui/field";
import { Input } from "jamsrui/input";

export const FieldUsage = (props: Field.Props) => {
  return (
    <Field {...props}>
      <Field.Label>Name</Field.Label>
      <Input />
      <Field.Error match="valueMissing">Please enter your name</Field.Error>
      <Field.Description>Visible on your profile</Field.Description>
    </Field>
  );
};
