"use client";
import { Description } from "jamsrui/description";
import { OtpInput } from "jamsrui/otp-input";
import { useState } from "react";

export const OtpInputControlled = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <OtpInput
        maxLength={4}
        value={value}
        onValueChange={setValue}
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
      </OtpInput>
      <Description>Value is {value}</Description>
    </div>
  );
};
