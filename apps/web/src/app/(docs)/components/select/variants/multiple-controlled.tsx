"use client";

import { Select, type SelectionSet, SelectItem } from "@jamsr-ui/react";
import { useState } from "react";

export const SelectMultipleControlled = () => {
  const [value, setValue] = useState<SelectionSet>(
    new Set(["option1", "option2"]),
  );
  return (
    <div className="min-h-[300px]">
      <Select
        className="max-w-md"
        label="Select Label"
        isMultiple
        value={value}
        onValueChange={setValue}
      >
        {Array(20)
          .fill(null)
          .map((_, idx) => {
            const value = `option${idx}`;
            return (
              <SelectItem key={value} value={value}>
                {`Option ${idx}`}
              </SelectItem>
            );
          })}
      </Select>
    </div>
  );
};
