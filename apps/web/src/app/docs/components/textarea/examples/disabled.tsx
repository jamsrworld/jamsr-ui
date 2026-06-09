"use client";

import { Field } from "ui/field";
import { TextArea } from "ui/textarea";

export const TextAreaDisabled = (props: TextArea.Props) => {
  return (
    <Field disabled>
      <Field.Label>Enter your name</Field.Label>
      <TextArea {...props} />
    </Field>
  );
};
