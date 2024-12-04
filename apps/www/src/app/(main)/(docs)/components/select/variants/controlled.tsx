"use client";

import { type SelectionSet } from "@jamsr-ui/react";
import { useState } from "react";
import { SelectUsage } from "./usage";

export const SelectControlled = () => {
  const [value, setValue] = useState<SelectionSet>(new Set(["apple"]));
  return (
    <SelectUsage
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value: ${Array.from(value).join("")}`}
    />
  );
};
