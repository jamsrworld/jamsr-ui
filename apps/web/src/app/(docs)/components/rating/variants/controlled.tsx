"use client";

import { useState } from "react";
import { RatingDefault } from "./default";

export const RatingControlled = () => {
  const [value, setValue] = useState(2);
  return (
    <RatingDefault
      value={value}
      onValueChange={setValue}
      helperText={`value is: ${value}`}
    />
  );
};
