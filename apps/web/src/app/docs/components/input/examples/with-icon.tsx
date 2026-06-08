"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Field } from "jamsrui/field";
import { InputGroup } from "jamsrui/input-group";
import { InputVariantProvider } from "../components/variant-provider";

export const InputWithIcon = () => {
  return (
    <InputVariantProvider>
      {(props) => (
        <Field>
          <Field.Label>Email</Field.Label>
          <InputGroup {...props}>
            <InputGroup.Prefix>
              <EmailIcon />
            </InputGroup.Prefix>
            <InputGroup.Input placeholder="Enter your email" type="email" />
          </InputGroup>
        </Field>
      )}
    </InputVariantProvider>
  );
};
