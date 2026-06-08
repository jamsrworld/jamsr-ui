"use client";

import { Field } from "jamsrui/field";
import { Input } from "jamsrui/input";
import { useState } from "react";

export const InputErrorState = (props: Input.Props) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input
        {...props}
        placeholder="Enter your username"
        value={value}
        onValueChange={setValue}
        isInvalid={isInvalid}
      />
      <Field.Description>Please use a unique username</Field.Description>
      {isInvalid && <Field.Error match>Username is required</Field.Error>}
    </Field>
  );
};
