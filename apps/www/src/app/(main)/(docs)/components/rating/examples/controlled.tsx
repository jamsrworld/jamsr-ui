"use client";

import { useState } from "react";
import { Rating } from "@jamsr-ui/react";

export const RatingControlled = () => {
  const [value, setValue] = useState(2);
  return (
    <Rating
      value={value}
      onValueChange={setValue}
      helperText={`value is: ${value}`}
      label="Rate your feedback!"
    />
  );
};
