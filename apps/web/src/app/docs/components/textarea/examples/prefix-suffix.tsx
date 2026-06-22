"use client";

import { Field } from "ui/field";
import { type Input } from "ui/input";
import { InputGroup } from "ui/input-group";

export const TextAreaPrefixSuffix = (props: Input.Variants) => {
  return (
    <div className="space-y-4">
      <Field>
        <Field.Label>Amount</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.TextArea />
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Discount</Field.Label>
        <InputGroup {...props}>
          <InputGroup.TextArea />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </Field>
      <Field>
        <Field.Label>Website</Field.Label>
        <InputGroup {...props}>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <InputGroup.TextArea />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </Field>
    </div>
  );
};
