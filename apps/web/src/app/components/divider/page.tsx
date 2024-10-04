import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DividerCustomization } from "./variants/customization";
import { DividerDefault } from "./variants/default";
import { DividerVariants } from "./variants/variants";
import { DividerOrientation } from "./variants/orientation";
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
      <VariantWrapper heading="Orientation">
        <DividerOrientation />
      </VariantWrapper>
      <VariantWrapper heading="Variants">
        <DividerVariants />
      </VariantWrapper>
      <VariantWrapper heading="Customization">
        <DividerCustomization />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Divider;
