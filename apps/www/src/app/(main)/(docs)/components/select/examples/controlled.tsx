"use client";

import { useState } from "react";
import { Select, SelectItem } from "@jamsr-ui/react";

export const SelectControlled = () => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <div className="min-h-[80px]">
      <Select
        className="max-w-sm"
        label="Select Label"
        value={value}
        onValueChange={setValue}
        helperText={`Selected Value: ${Array.from(value).join("")}`}
      >
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="watermelon">Watermelon</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </Select>
    </div>
  );
};
