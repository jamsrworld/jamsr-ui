"use client";

import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";
import React, { useState } from "react";

export const SwitchControlled = (
  props: React.ComponentProps<typeof Switch>,
) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Field orientation="horizontal">
      <Switch
        checked={isChecked}
        onCheckedChange={setIsChecked}
        {...props}
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
