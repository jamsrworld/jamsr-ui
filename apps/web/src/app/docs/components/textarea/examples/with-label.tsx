"use client";

import { Field } from "jamsrui/field";
import { TextArea } from "jamsrui/textarea";

export const TextAreaWithLabel = (props: TextArea.Props) => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <TextArea
        {...props}
        placeholder="Enter your username"
      />
    </Field>
  );
};
