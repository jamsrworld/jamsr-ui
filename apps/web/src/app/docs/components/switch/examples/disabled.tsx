"use client";

import { Field } from "ui/field";
import { Switch } from "ui/switch";
import React from "react";

export const SwitchDisabled = (props: React.ComponentProps<typeof Switch>) => {
  const { disabled = true, ...rest } = props;
  return (
    <Field orientation="horizontal">
      <Switch
        disabled={disabled}
        {...rest}
      />
      <Field.Label>Enable Notifications</Field.Label>
    </Field>
  );
};
