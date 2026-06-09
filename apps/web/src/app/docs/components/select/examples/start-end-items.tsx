"use client";

import { EmailIcon } from "@jamsrui/icons";
import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";
import React from "react";

export const SelectStartEndItems = (
  props: Partial<React.ComponentProps<typeof Select>>,
) => {
  return (
    <Select {...props}>
      <Label>Fruit</Label>
      <Select.Trigger className="min-w-40" />
      <Select.Content>
        <Select.Item value="apple">
          <Select.ItemIndicator />
          <EmailIcon className="text-foreground-secondary text-base" />
          <Select.ItemText>Apple</Select.ItemText>
        </Select.Item>
        <Select.Item value="blueberry">
          <Select.ItemIndicator />
          <EmailIcon className="text-foreground-secondary text-base" />
          <Select.ItemText>Blueberry</Select.ItemText>
        </Select.Item>
        <Select.Item value="watermelon">
          <Select.ItemIndicator />
          <EmailIcon className="text-foreground-secondary text-base" />
          <Select.ItemText>Watermelon</Select.ItemText>
        </Select.Item>
      </Select.Content>
    </Select>
  );
};
