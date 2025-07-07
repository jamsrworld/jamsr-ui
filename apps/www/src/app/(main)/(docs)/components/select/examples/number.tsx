"use client";

import { Select, SelectItem, SelectValue } from "@jamsr-ui/react";
import { useState } from "react";

enum Status {
  Active = 1,
  Inactive = 2,
}

export const SelectNumberValues = () => {
  const [value, setValue] = useState<SelectValue[]>([Status.Active]);
  return (
    <div className="min-h-[80px]">
      <Select
        value={value}
        onValueChange={setValue}
        className="max-w-sm"
        label="Select Label"
      >
        {Object.values(Status)
          .filter(Number)
          .map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
      </Select>
    </div>
  );
};
