import { OtpInput } from "jamsrui/otp-input";

export const OtpInputCustomization = () => {
  return (
    <OtpInput maxLength={4}>
      <OtpInput.Group className="flex gap-2">
        <OtpInput.Slot
          index={0}
          className="border rounded-md"
        />
        <OtpInput.Slot
          index={1}
          className="border rounded-md"
        />
        <OtpInput.Slot
          index={2}
          className="border rounded-md"
        />
        <OtpInput.Slot
          index={3}
          className="border rounded-md"
        />
      </OtpInput.Group>
    </OtpInput>
  );
};
