"use client";

import { Description } from "jamsrui/description";
import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";
import { useState } from "react";

enum Fruits {
  APPLE = 1,
  BLUEBERRY = 2,
  WATERMELON = 3,
  BANANA = 4,
  ORANGE = 5,
}

const fruits = [
  { label: "Apple", value: Fruits.APPLE },
  { label: "Blueberry", value: Fruits.BLUEBERRY },
  { label: "Watermelon", value: Fruits.WATERMELON },
  { label: "Banana", value: Fruits.BANANA },
  { label: "Orange", value: Fruits.ORANGE },
];

export const SelectControlledNumber = () => {
  const [value, setValue] = useState<Fruits>(Fruits.APPLE);
  return (
    <div className="flex flex-col gap-2">
      <Select
        value={value}
        onValueChange={setValue}
      >
        <Label>Fruit</Label>
        <Select.Trigger className="min-w-40" />
        <Select.Content>
          {fruits.map(({ label, value }) => (
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
