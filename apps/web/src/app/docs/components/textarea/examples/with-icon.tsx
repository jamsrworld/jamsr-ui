"use client";

import { EmailIcon } from "@/icons";
import { Field } from "ui/field";
import { type Input } from "ui/input";
import { InputGroup } from "ui/input-group";

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
