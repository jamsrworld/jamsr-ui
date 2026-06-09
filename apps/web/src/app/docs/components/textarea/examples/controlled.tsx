"use client";

import { Description } from "jamsrui/description";
import { Field } from "jamsrui/field";
import { type Input } from "jamsrui/input";
import { InputGroup } from "jamsrui/input-group";
import { useState } from "react";

export const TextAreaControlled = (props: Input.Variants) => {
  const [value, setValue] = useState("");
  return (
    <Field className="max-w-62 w-full">
      <Field.Label>Name</Field.Label>
      <InputGroup {...props}>
        <InputGroup.TextArea
          value={value}
          onValueChange={setValue}
        />
      </InputGroup>
      <Description>Your name is: {value}</Description>
    </Field>
  );
};
