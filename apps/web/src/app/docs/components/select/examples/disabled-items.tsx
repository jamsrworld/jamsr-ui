"use client";

import { Field } from "ui/field";
import { Label } from "ui/label";
import { Select } from "ui/select";
import React from "react";

const apples = [
  { label: "Gala", value: "gala", disabled: true },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp", disabled: true },
  { label: "Granny Smith", value: "granny-smith", disabled: true },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectDisabledItems = (
  props: Partial<Select.Props>,
) => {
  return (
    <Field>
      <Field.Label>Fruit</Field.Label>
      <Select
        items={apples}
        {...props}
      >
        <Select.Trigger className="min-w-40" />
        <Select.Content>
          {apples.map(({ label, value, disabled }) => (
            <Select.Item
              key={label}
              value={value}
              disabled={disabled}
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
