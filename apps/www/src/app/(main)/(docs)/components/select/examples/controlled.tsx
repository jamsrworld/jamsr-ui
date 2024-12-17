"use client";

import { useState } from "react";
import { SelectUsage } from "./usage";

export const SelectControlled = () => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <SelectUsage
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value: ${Array.from(value).join("")}`}
    />
  );
};
