"use client";

import { Input } from "ui/input";
import { Field } from "ui/field";

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
