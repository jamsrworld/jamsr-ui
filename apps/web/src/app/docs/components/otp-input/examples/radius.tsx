import { OtpInput } from "jamsrui/otp-input";

export const OtpInputRadius = () => {
  return (
    <OtpInput maxLength={4}>
      <OtpInput.Group className="gap-4 flex">
        <OtpInput.Slot
          index={0}
          className="rounded-full!"
        />
        <OtpInput.Slot
          index={1}
          className="rounded-full"
        />
        <OtpInput.Slot
          index={2}
          className="rounded-full"
        />
        <OtpInput.Slot
          index={3}
          className="rounded-full!"
        />
      </OtpInput.Group>
    </OtpInput>
  );
};
