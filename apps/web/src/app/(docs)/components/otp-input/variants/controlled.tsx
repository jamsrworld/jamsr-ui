"use client";

import { OtpInput } from "@jamsr-ui/react";
import { useState } from "react";

export const OtpInputControlled = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <OtpInput value={value} onValueChange={setValue} />
      <div>Value is: {value}</div>
    </div>
  );
};
