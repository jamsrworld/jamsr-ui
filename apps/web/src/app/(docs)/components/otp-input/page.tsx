import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { OtpInput6Digits } from "./variants/6-digits";
import { OtpInputDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Otp-input",
};

const OtpInput = () => {
  return (
    <VariantPage heading="Otp Input">
      <VariantWrapper heading="Default">
        <OtpInputDefault />
      </VariantWrapper>
      {/* <VariantWrapper heading="6 Digits">
        <OtpInput6Digits />
      </VariantWrapper> */}
    </VariantPage>
  );
};
export default OtpInput;
