"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Field } from "jamsrui/field";
import { InputGroup } from "jamsrui/input-group";
import { type Input } from "jamsrui/input";

export const InputWithIcon = (props: Input.Variants) => {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <InputGroup {...props}>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <InputGroup.Input
          placeholder="Enter your email"
          type="email"
        />
      </InputGroup>
    </Field>
  );
};
