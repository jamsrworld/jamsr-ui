"use client";

import { Field } from "jamsrui/field";
import { Select } from "jamsrui/select";
import React from "react";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectDisabled = (
  props: Partial<React.ComponentProps<typeof Select>>,
) => {
  const { disabled = true, ...rest } = props;
  return (
    <Field>
      <Field.Label>Fruit</Field.Label>
      <Select
        items={apples}
        disabled={disabled}
        {...rest}
      >
        <Select.Trigger className="min-w-40" />
        <Select.Content>
          {apples.map(({ label, value }) => (
            <Select.Item
              key={label}
              value={value}
            >
              <Select.ItemIndicator />
              <Select.ItemText>{label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </Field>
  );
};
