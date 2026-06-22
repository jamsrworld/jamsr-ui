"use client";

import { Field } from "ui/field";
import { TextArea } from "ui/textarea";

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
