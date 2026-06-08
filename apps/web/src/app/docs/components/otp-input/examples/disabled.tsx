import { OtpInput } from "jamsrui/otp-input";

export const OtpInputDisabled = () => {
  return (
    <OtpInput
      maxLength={4}
      disabled
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
