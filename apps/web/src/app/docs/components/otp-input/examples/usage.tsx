"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInputUsage = (props: OtpInput.Props) => {
  const { maxLength = 4, ...rest } = props;
  return (
    <OtpInput
      maxLength={maxLength}
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
