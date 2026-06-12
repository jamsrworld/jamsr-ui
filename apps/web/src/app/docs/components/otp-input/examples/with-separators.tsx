"use client";

import { OtpInput } from "ui/otp-input";

export const OtpInputWithSeparators = (props: Partial<OtpInput.Props>) => {
  return (
    <div className="flex flex-col gap-8">
      <OtpInput
        maxLength={4}
        {...props}
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
        </OtpInput.Group>
        <OtpInput.Separator />
        <OtpInput.Group>
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
      </OtpInput>
      <OtpInput
        maxLength={6}
        {...props}
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
          <OtpInput.Slot index={2} />
        </OtpInput.Group>
        <OtpInput.Separator />
        <OtpInput.Group>
          <OtpInput.Slot index={3} />
          <OtpInput.Slot index={4} />
          <OtpInput.Slot index={5} />
        </OtpInput.Group>
      </OtpInput>
      <OtpInput
        maxLength={6}
        {...props}
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
        </OtpInput.Group>
        <OtpInput.Separator />
        <OtpInput.Group>
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
        <OtpInput.Separator />
        <OtpInput.Group>
          <OtpInput.Slot index={4} />
          <OtpInput.Slot index={5} />
        </OtpInput.Group>
      </OtpInput>
    </div>
  );
};
