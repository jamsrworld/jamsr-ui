"use client";

import { Stepper } from "@jamsr-ui/react";
import { useState } from "react";

export const StepperControlled = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Stepper value={value} onValueChange={setValue} />
      <div className="text-xs text-foreground-secondary">
        Current Value: {value}
      </div>
    </div>
  );
};
