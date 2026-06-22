"use client";

import { InputGroup } from "ui/input-group";
import { Field } from "ui/field";
import { type Input } from "ui/input";

export const InputPrefixSuffix = (props: Input.Variants) => {
  return (
    <div className="space-y-4">
      <Field>
        <Field.Label>Amount</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input />
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Discount</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Website</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
