"use client";

import { InputGroup } from "jamsrui/input-group";
import { Field } from "jamsrui/field";
import { InputVariantProvider } from "../components/variant-provider";

export const InputPrefixSuffix = () => {
  return (
    <InputVariantProvider>
      {(props) => (
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
      )}
    </InputVariantProvider>
  );
};
