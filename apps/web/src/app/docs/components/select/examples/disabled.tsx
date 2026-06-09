"use client";

import { Field } from "ui/field";
import { Select } from "ui/select";
import React from "react";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectDisabled = (
  props: Partial<Select.Props>,
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
