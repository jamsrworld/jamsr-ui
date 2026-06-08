"use client";

import { Field } from "jamsrui/field";
import { Input } from "jamsrui/input";
import { useState } from "react";
import { InputVariantProvider } from "../components/variant-provider";

export const InputErrorState = () => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <InputVariantProvider>
      {(props) => (
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
      )}
    </InputVariantProvider>
  );
};
