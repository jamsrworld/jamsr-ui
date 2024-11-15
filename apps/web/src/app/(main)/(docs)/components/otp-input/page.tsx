import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { OtpInput6Digits } from "./variants/6-digits";
import { OtpInputControlled } from "./variants/controlled";
import { OtpInputDefault } from "./variants/default";

const title = "OTP Input";
const description =
  "The One-Time Password (OTP) component is designed to facilitate secure, user-friendly and enhancing the user experience during multi-factor authentication.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["otp-input"][number]>(variant: T) =>
  readVariantCode("otp-input", variant);

const OtpInput = () => {
  return (
    <VariantPage heading="OTP Input" description={description}>
      <VariantWrapper heading="Default" code={code("default")}>
        <OtpInputDefault />
      </VariantWrapper>
      <VariantWrapper heading="6 Digits" code={code("6-digits")}>
        <OtpInput6Digits />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <OtpInputControlled />
      </VariantWrapper>
    </VariantPage>
  );
};
export default OtpInput;