"use client";

import { Input } from "jamsrui/input";
import { Field } from "jamsrui/field";
import { InputVariantProvider } from "../components/variant-provider";

export const InputWithLabel = () => {
  return (
    <InputVariantProvider>
      {(props) => (
        <Field>
          <Field.Label>Username</Field.Label>
          <Input {...props} placeholder="Enter your username" />
        </Field>
      )}
    </InputVariantProvider>
  );
};
