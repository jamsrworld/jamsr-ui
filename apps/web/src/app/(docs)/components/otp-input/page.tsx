import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
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

const OtpInput = () => {
  return (
    <VariantPage heading="OTP Input" description={description}>
      <VariantWrapper heading="Default">
        <OtpInputDefault />
      </VariantWrapper>
      <VariantWrapper heading="6 Digits">
        <OtpInput6Digits />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <OtpInputControlled />
      </VariantWrapper>
    </VariantPage>
  );
};
export default OtpInput;
