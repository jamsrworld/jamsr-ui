"use client";

import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";
import React from "react";

export const SwitchDescription = (
  props: React.ComponentProps<typeof Switch>,
) => {
  return (
    <Field orientation="horizontal">
      <Switch {...props} />
      <Field.Content>
        <Field.Label>Are you ok?</Field.Label>
        <Field.Description>This is a description</Field.Description>
      </Field.Content>
    </Field>
  );
};
