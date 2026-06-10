"use client";

import { PlusIcon } from "@/icons";
import { Checkbox } from "ui/checkbox";
import { Field } from "ui/field";
import { useState } from "react";

export const CheckboxCustomIndicator = (props: Checkbox.Props) => {
  const [checked, setChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        {...props}
      >
        <Checkbox.Indicator>{checked ? <PlusIcon /> : null}</Checkbox.Indicator>
      </Checkbox>
      <Field.Content>
        <Field.Label>Enable email notifications</Field.Label>
      </Field.Content>
    </Field>
  );
};
