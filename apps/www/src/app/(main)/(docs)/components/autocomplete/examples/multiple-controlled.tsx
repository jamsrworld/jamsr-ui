"use client";

import { useState } from "react";
import { AutocompleteUsage } from "./usage";

export const AutocompleteMultipleControlled = () => {
  const [value, setValue] = useState<string[]>(["cat"]);
  return (
    <AutocompleteUsage
      isMultiple
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value is ${Array.from(value).join("")}`}
    />
  );
};
