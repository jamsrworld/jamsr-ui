import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DividerColors } from "./variants/colors";
import { DividerCustomization } from "./variants/customization";
import { DividerDefault } from "./variants/default";
import { DividerOrientation } from "./variants/orientation";
import { DividerVariants } from "./variants/variants";
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
      <VariantWrapper heading="Colors">
        <DividerColors />
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
