"use client";

import { Field } from "jamsrui/field";
import { Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";

export const InputDisabled = (props: Input.Variants) => {
  return (
    <div className="flex flex-col gap-4">
      <Field disabled>
        <Field.Label>Enter your name</Field.Label>
        <Input {...props} />
      </Field>
      <Field disabled>
        <Field.Label>Enter your name</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
