"use client";

import { Checkbox } from "@jamsr-ui/react";
import { useState } from "react";

export const CheckboxControlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Controlled Checkbox"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};
