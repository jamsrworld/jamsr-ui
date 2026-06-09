"use client";

import { SuccessIcon } from "@jamsrui/icons";
import { Field } from "jamsrui/field";
import { Switch } from "jamsrui/switch";
import React from "react";

export const SwitchCustomization = (
  props: React.ComponentProps<typeof Switch>,
) => {
  return (
    <Field orientation="horizontal">
      <Switch {...props}>
        <Switch.Thumb>
          <SuccessIcon className="size-3 shrink-0 text-primary" />
        </Switch.Thumb>
      </Switch>
      <Field.Content>
        <Field.Label>Are you ok?</Field.Label>
        <Field.Description>This is a description</Field.Description>
      </Field.Content>
    </Field>
  );
};
