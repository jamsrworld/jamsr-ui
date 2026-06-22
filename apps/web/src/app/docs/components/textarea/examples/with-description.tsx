"use client";

import { Description } from "ui/description";
import { Field } from "ui/field";
import { TextArea } from "ui/textarea";

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
