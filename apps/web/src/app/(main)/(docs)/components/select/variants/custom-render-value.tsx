"use client";

import { SelectUsage } from "./usage";

export const SelectCustomRenderValue = () => {
  return (
    <SelectUsage
      placeholder="Choose Fruit"
      renderValue={(value) => {
        return `Selected value is ${Array.from(value).join("")}`;
      }}
    />
  );
};
