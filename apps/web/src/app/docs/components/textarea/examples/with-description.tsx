"use client";

import { Description } from "jamsrui/description";
import { Field } from "jamsrui/field";
import { TextArea } from "jamsrui/textarea";

export const TextAreaWithDescription = (props: TextArea.Props) => {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <TextArea
        {...props}
        placeholder="Enter your username"
      />
      <Description>Please use a unique username</Description>
    </Field>
  );
};
