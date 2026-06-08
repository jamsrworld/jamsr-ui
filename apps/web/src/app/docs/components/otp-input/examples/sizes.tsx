import { OtpInput } from "jamsrui/otp-input";

export const OtpInputSizes = () => {
  return (
    <div className="flex flex-col gap-8">
      <OtpInput
        maxLength={4}
        size="sm"
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
      </OtpInput>
      <OtpInput
        maxLength={4}
        size="md"
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
      </OtpInput>
      <OtpInput
        maxLength={4}
        size="lg"
      >
        <OtpInput.Group>
          <OtpInput.Slot index={0} />
          <OtpInput.Slot index={1} />
          <OtpInput.Slot index={2} />
          <OtpInput.Slot index={3} />
        </OtpInput.Group>
      </OtpInput>
    </div>
  );
};
