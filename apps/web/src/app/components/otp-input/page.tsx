import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
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
    </VariantPage>
  );
};
export default OtpInput;
