"use client";

import { Description } from "jamsrui/description";
import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";

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
