import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { DividerColors } from "./examples/colors";
import { DividerCustomization } from "./examples/customization";
import { DividerUsage } from "./examples/usage";
import { DividerOrientation } from "./examples/orientation";
import { DividerVariants } from "./examples/variants";
import { DividerWithText } from "./examples/with-text";

export const metadata: Metadata = {
  title: "Divider",
};

const code = <T extends VariantTypes["divider"][number]>(variant: T) =>
  readVariantCode("divider", variant);

const Divider = () => {
  return (
    <VariantPage heading="Divider">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DividerUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Text" code={code("with-text")}>
        <DividerWithText />
      </VariantWrapper>
      <VariantWrapper heading="Orientation" code={code("orientation")}>
        <DividerOrientation />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <DividerColors />
      </VariantWrapper>
      <VariantWrapper heading="Variants" code={code("variants")}>
        <DividerVariants />
      </VariantWrapper>
      <VariantWrapper heading="Customization" code={code("customization")}>
        <DividerCustomization />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Divider;
