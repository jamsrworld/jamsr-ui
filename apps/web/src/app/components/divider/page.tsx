import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DividerDefault } from "./variants/default";
import { DividerWithText } from "./variants/with-text";

export const metadata: Metadata = {
  title: "Divider",
};

const Divider = () => {
  return (
    <VariantPage heading="Divider">
      <VariantWrapper heading="Default">
        <DividerDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Text">
        <DividerWithText />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Divider;
