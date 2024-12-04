"use client";

import { type SelectionSet } from "@jamsr-ui/react";
import { useState } from "react";
import { AutocompleteUsage } from "./usage";

export const AutocompleteMultipleControlled = () => {
  const [value, setValue] = useState<SelectionSet>(new Set(["cat"]));
  return (
    <AutocompleteUsage
      isMultiple
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value is ${Array.from(value).join("")}`}
    />
  );
};
