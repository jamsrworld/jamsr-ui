"use client";

import { Field } from "ui/field";
import { Switch } from "ui/switch";
import React, { useState } from "react";

export const SwitchControlled = (props: Switch.Props) => {
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
