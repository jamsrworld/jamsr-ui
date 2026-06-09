"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Field } from "ui/field";
import { Select } from "ui/select";
import React from "react";

export const SelectStartEndItems = (
  props: Partial<Select.Props>,
) => {
  return (
    <Field>
      <Field.Label>Fruit</Field.Label>
      <Select {...props}>
        <Select.Trigger className="min-w-40" />
        <Select.Content>
          <Select.Item value="apple">
            <Select.ItemIndicator />
            <Select.ItemText>Apple</Select.ItemText>
            <EmailIcon className="text-foreground-secondary text-base ms-auto" />
          </Select.Item>
          <Select.Item value="blueberry">
            <Select.ItemIndicator />
            <Select.ItemText>Blueberry</Select.ItemText>
            <EmailIcon className="text-foreground-secondary text-base ms-auto" />
          </Select.Item>
          <Select.Item value="watermelon">
            <Select.ItemIndicator />
            <Select.ItemText>Watermelon</Select.ItemText>
            <EmailIcon className="text-foreground-secondary text-base ms-auto" />
          </Select.Item>
        </Select.Content>
      </Select>
    </Field>
  );
};
