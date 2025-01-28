"use client";

import { Select, SelectItem, type SelectProps } from "@jamsr-ui/react";

export const SelectRadius = () => {
  const radii: SelectProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="min-h-[80px] space-y-2">
      {radii.map((radius) => (
        <Select
          className="max-w-sm"
          label="Select Label"
          radius={radius}
          key={radius}
        >
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="watermelon">Watermelon</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </Select>
      ))}
    </div>
  );
};
