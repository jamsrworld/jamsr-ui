"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInputOnComplete = (props: OtpInput.Props) => {
  const { maxLength = 4, ...rest } = props;
  const handleComplete = (val: unknown) => {
    console.log(`Completed: ${val}`);
  };
  return (
    <OtpInput
      maxLength={maxLength}
      onComplete={handleComplete}
      {...rest}
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
