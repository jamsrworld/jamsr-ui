import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
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
    </VariantPage>
  );
};
export default Ripple;
