"use client";

import { Label } from "ui/label";
import { OtpInput, REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS } from "ui/otp-input";

export const OtpInputWithPatterns = (props: Partial<OtpInput.Props>) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Label>Only digits</Label>
        <OtpInput
          maxLength={4}
          pattern={REGEXP_ONLY_DIGITS}
          {...props}
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
          maxLength={4}
          pattern={REGEXP_ONLY_CHARS}
          {...props}
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
