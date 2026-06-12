"use client";

import { OtpInput } from "ui/otp-input";
import { useState } from "react";

export const OtpInputControlled = (props: Partial<OtpInput.Props>) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <OtpInput
        value={value}
        onChange={setValue}
        maxLength={4}
        {...props}
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
      </OtpInput>
      <div className="text-sm text-foreground-secondary">Value: {value}</div>
    </div>
  );
};
