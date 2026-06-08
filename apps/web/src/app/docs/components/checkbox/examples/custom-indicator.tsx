"use client";

import { PlusIcon } from "@jamsrui/icons";
import { Checkbox } from "jamsrui/checkbox";
import { Field } from "jamsrui/field";
import { useState } from "react";

export const CheckboxCustomIndicator = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
      >
        <Checkbox.Indicator>{checked ? <PlusIcon /> : null}</Checkbox.Indicator>
      </Checkbox>
      <Field.Content>
        <Field.Label>Enable email notifications</Field.Label>
      </Field.Content>
    </Field>
  );
};
