"use client";

import { EmailIcon } from "@/icons";
import { Field } from "ui/field";
import { InputGroup } from "ui/input-group";
import { type Input } from "ui/input";

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
