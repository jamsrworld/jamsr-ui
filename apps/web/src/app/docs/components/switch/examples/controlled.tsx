"use client";

import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";
import { useState } from "react";

export const SwitchControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Switch
        checked={isChecked}
        onCheckedChange={setIsChecked}
      />
      <Field.Content>
        <Field.Label>Are you ok?</Field.Label>
        <Field.Description>
          {isChecked ? "Checked" : "Unchecked"}
        </Field.Description>
      </Field.Content>
    </Field>
  );
};
