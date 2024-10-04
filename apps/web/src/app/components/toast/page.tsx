import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DefaultToast } from "./variants/default";

export const metadata: Metadata = {
  title: "Toast",
};

const Toast = () => {
  return (
    <VariantPage heading="Toast">
      <VariantWrapper heading="Default">
        <DefaultToast />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Toast;
