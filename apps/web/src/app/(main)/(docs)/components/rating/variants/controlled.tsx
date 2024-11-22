"use client";

import { useState } from "react";
import { RatingUsage } from "./usage";

export const RatingControlled = () => {
  const [value, setValue] = useState(2);
  return (
    <RatingUsage
      value={value}
      onValueChange={setValue}
      helperText={`value is: ${value}`}
    />
  );
};
