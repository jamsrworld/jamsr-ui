"use client";

import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";
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
