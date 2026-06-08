"use client";

import { Label } from "jamsrui/label";
import { Select } from "jamsrui/select";

export const SelectRadius = () => {
  const radii: Select.Props["radius"][] = ["none", "sm", "md", "lg", "full"];
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      {radii.map((radius) => (
        <Select
          radius={radius}
          key={radius}
        >
          <Label>Select Label</Label>
          <Select.Trigger className="min-w-40" />
          <Select.Content>
            <Select.Item value="apple">
              <Select.ItemIndicator />
              <Select.ItemText>Apple</Select.ItemText>
            </Select.Item>
            <Select.Item value="blueberry">
              <Select.ItemIndicator />
              <Select.ItemText>Blueberry</Select.ItemText>
            </Select.Item>
            <Select.Item value="watermelon">
              <Select.ItemIndicator />
              <Select.ItemText>Watermelon</Select.ItemText>
            </Select.Item>
            <Select.Item value="banana">
              <Select.ItemIndicator />
              <Select.ItemText>Banana</Select.ItemText>
            </Select.Item>
            <Select.Item value="orange">
              <Select.ItemIndicator />
              <Select.ItemText>Orange</Select.ItemText>
            </Select.Item>
          </Select.Content>
        </Select>
      ))}
    </div>
  );
};
