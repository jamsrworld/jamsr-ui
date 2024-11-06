import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { RippleAtCenter } from "./variants/center";
import { RippleDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Ripple",
};

const Ripple = () => {
  return (
    <VariantPage heading="Ripple">
      <VariantWrapper heading="Default">
        <RippleDefault />
      </VariantWrapper>
      <VariantWrapper heading="Center">
        <RippleAtCenter />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Ripple;
