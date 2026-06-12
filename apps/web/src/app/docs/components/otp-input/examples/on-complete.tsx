"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInputOnComplete = (props: Partial<OtpInput.Props>) => {
  const handleComplete = (val: unknown) => {
    console.log(`Completed: ${val}`);
  };
  return (
    <OtpInput
      maxLength={4}
      onComplete={handleComplete}
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
