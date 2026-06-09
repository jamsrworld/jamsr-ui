"use client";

import { Field } from "ui/field";
import { Switch } from "ui/switch";
import React from "react";

export const SwitchWithLabel = (props: React.ComponentProps<typeof Switch>) => {
  return (
    <Field orientation="horizontal">
      <Switch {...props} />
      <Field.Label>Enable notifications</Field.Label>
    </Field>
  );
};
