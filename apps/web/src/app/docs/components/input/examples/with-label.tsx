"use client";

import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";

export const InputWithLabel = (props: Input.Variants) => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input
        {...props}
        placeholder="Enter your username"
      />
    </Field>
  );
};
