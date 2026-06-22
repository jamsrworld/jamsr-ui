"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInput6Digits = (props: Partial<OtpInput.Props>) => {
  return (
    <OtpInput
      maxLength={6}
      {...props}
    >
      <OtpInput.Group>
        <OtpInput.Slot index={0} />
        <OtpInput.Slot index={1} />
        <OtpInput.Slot index={2} />
        <OtpInput.Slot index={3} />
        <OtpInput.Slot index={4} />
        <OtpInput.Slot index={5} />
      </OtpInput.Group>
    </OtpInput>
  );
};
