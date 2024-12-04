"use client";

import { Checkbox } from "@jamsr-ui/react";
import { useState } from "react";

export const CheckboxControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      label="Controlled Checkbox"
      isChecked={isChecked}
      onCheckedChange={setIsChecked}
      helperText={isChecked ? "Checked" : "Unchecked"}
    />
  );
};
