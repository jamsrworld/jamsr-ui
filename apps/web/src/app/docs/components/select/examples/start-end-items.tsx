"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Field } from "jamsrui/field";
import { Select } from "jamsrui/select";
import React from "react";

export const SelectStartEndItems = (
  props: Partial<React.ComponentProps<typeof Select>>,
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
