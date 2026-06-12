"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInputInvalid = (props: Partial<OtpInput.Props>) => {
  return (
    <OtpInput
      isInvalid
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
