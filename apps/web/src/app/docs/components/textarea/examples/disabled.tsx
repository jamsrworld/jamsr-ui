"use client";

import { Field } from "jamsrui/field";
import { TextArea } from "jamsrui/textarea";

export const TextAreaDisabled = (props: TextArea.Props) => {
  return (
    <Field disabled>
      <Field.Label>Enter your name</Field.Label>
      <TextArea {...props} />
    </Field>
  );
};
