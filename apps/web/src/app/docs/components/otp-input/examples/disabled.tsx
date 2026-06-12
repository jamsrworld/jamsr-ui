"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInputDisabled = (props: Partial<OtpInput.Props>) => {
  return (
    <OtpInput
      disabled
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
  );
};
