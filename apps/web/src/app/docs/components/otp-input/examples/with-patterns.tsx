"use client";

import { Label } from "ui/label";
import { OtpInput, REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS } from "ui/otp-input";

export const OtpInputWithPatterns = (props: OtpInput.Props) => {
  const { maxLength = 4, ...rest } = props;
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Label>Only digits</Label>
        <OtpInput
          maxLength={maxLength}
          pattern={REGEXP_ONLY_DIGITS}
          {...rest}
        >
          <OtpInput.Group>
            <OtpInput.Slot index={0} />
            <OtpInput.Slot index={1} />
            <OtpInput.Slot index={2} />
            <OtpInput.Slot index={3} />
          </OtpInput.Group>
        </OtpInput>
      </div>
      <div>
        <Label>Only characters</Label>
        <OtpInput
          maxLength={maxLength}
          pattern={REGEXP_ONLY_CHARS}
          {...rest}
        >
          <OtpInput.Group>
            <OtpInput.Slot index={0} />
            <OtpInput.Slot index={1} />
            <OtpInput.Slot index={2} />
            <OtpInput.Slot index={3} />
          </OtpInput.Group>
        </OtpInput>
      </div>
    </div>
  );
};
