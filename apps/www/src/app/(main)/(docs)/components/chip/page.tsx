import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { ChipColors } from "./examples/colors";
import { ChipWithDelete } from "./examples/with-delete";
import { ChipSizes } from "./examples/sizes";
import { ChipUsage } from "./examples/usage";
import { ChipVariants } from "./examples/variants";
import { ChipVariantsColors } from "./examples/variants-colors";
import { ChipRadius } from "./examples/radius";

const title = "Chip";
const description =
  "A Chip is a small block of essential information that represent an input, attribute, or action.";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["chip"][number]>(variant: T) =>
  readVariantCode("chip", variant);

const Chip = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <ChipUsage />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <ChipRadius />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("usage")}>
        <ChipColors />
      </VariantWrapper>
      <VariantWrapper heading="Variants" code={code("usage")}>
        <ChipVariants />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <ChipSizes />
      </VariantWrapper>
      <VariantWrapper
        heading="Variants & Colors"
        code={code("variants-colors")}
      >
        <ChipVariantsColors />
      </VariantWrapper>
      <VariantWrapper heading="With Delete" code={code("with-delete")}>
        <ChipWithDelete />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Chip;
