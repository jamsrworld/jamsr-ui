"use client";

import { OtpInput } from "jamsrui/otp-input";

export const OtpInput6Digits = (props: OtpInput.Props) => {
  const { maxLength = 6, ...rest } = props;
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
        <OtpInput.Slot index={4} />
        <OtpInput.Slot index={5} />
      </OtpInput.Group>
    </OtpInput>
  );
};
