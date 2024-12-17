import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { OtpInput6Digits } from "./examples/6-digits";
import { OtpInputControlled } from "./examples/controlled";
import { OtpInputRadius } from "./examples/radius";
import { OtpInputUsage } from "./examples/usage";

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
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <OtpInputUsage />
      </VariantWrapper>
      <VariantWrapper heading="6 Digits" code={code("6-digits")}>
        <OtpInput6Digits />
      </VariantWrapper>
     
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <OtpInputControlled />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <OtpInputRadius />
      </VariantWrapper>
    </VariantPage>
  );
};
export default OtpInput;
