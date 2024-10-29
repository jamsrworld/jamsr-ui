"use client";

import { SelectDefault } from "./default";

export const SelectCustomRenderValue = () => {
  return (
    <SelectDefault
      placeholder="Choose Fruit"
      renderValue={(value) => {
        return `Selected value is ${Array.from(value).join("")}`;
      }}
    />
  );
};
