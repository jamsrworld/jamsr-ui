"use client";

import { useState } from "react";
import { AutocompleteUsage } from "./usage";

export const AutocompleteControlled = () => {
  const [value, setValue] = useState<string[]>(["cat"]);
  return (
    <AutocompleteUsage
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value is ${Array.from(value).join("")}`}
    />
  );
};
