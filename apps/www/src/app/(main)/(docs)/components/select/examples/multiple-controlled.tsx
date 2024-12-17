"use client";

import { Select, SelectItem } from "@jamsr-ui/react";
import { useState } from "react";

export const SelectMultipleControlled = () => {
  const [value, setValue] = useState<string[]>(["option1", "option2"]);
  return (
    <div>
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
