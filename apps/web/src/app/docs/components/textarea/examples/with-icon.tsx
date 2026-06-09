"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Field } from "jamsrui/field";
import { type Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";

export const TextAreaWithIcon = (props: Input.Variants) => {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <InputGroup {...props}>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <InputGroup.TextArea
          placeholder="Enter your email"
          className="w-full"
        />
      </InputGroup>
    </Field>
  );
};
