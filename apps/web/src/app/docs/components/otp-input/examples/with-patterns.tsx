import { Label } from "jamsrui/label";
import {
  OtpInput,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
} from "jamsrui/otp-input";

export const OtpInputWithPatterns = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Label>Only digits</Label>
        <OtpInput
          maxLength={4}
          pattern={REGEXP_ONLY_DIGITS}
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
