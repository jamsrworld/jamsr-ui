"use client";

import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";
import React, { useState } from "react";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

export const SelectControlled = (
  props: Partial<React.ComponentProps<typeof Select>>,
) => {
  const [value, setValue] = useState<string | null>("gala");
  return (
    <div className="flex flex-col gap-2">
      <Select
        items={apples}
        value={value}
        onValueChange={(val) => setValue(val as string | null)}
        {...props}
      >
        <Label>Fruit</Label>
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
      <Description>Selected value: {value}</Description>
    </div>
  );
};
