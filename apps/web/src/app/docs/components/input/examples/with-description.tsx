"use client";

import { Description } from "ui/description";
import { Input } from "ui/input";
import { Field } from "ui/field";

export const InputWithDescription = (props: Input.Variants) => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input
        {...props}
        placeholder="Enter your username"
      />
      <Description>Please use a unique username</Description>
    </Field>
  );
};
