"use client";

import { SelectionSet } from "@jamsr-ui/react";
import { useState } from "react";
import { AutocompleteDefault } from "./default";

export const AutocompleteMultipleControlled = () => {
  const [value, setValue] = useState<SelectionSet>(new Set(["cat"]));
  return (
    <AutocompleteDefault
      isMultiple
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value is ${Array.from(value).join("")}`}
    />
  );
};