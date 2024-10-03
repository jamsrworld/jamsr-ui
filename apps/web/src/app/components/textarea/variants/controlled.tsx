"use client";

import { Textarea } from "@jamsr-ui/react";
import { useState } from "react";

export const TextareaControlled = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Textarea
        label="Controlled Textarea"
        value={value}
        onValueChange={setValue}
      />
      <p className="text-foreground-secondary">Value: {value}</p>
    </div>
  );
};
