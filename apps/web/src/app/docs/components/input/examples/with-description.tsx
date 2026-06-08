"use client";

import { Description } from "jamsrui/description";
import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";
import { InputVariantProvider } from "../components/variant-provider";

export const InputWithDescription = () => {
  return (
    <InputVariantProvider>
      {(props) => (
        <Field>
          <Field.Label>Username</Field.Label>
          <Input {...props} placeholder="Enter your username" />
          <Description>Please use a unique username</Description>
        </Field>
      )}
    </InputVariantProvider>
  );
};
