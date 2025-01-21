import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { ChipBordered } from "./examples/bordered";
import { ChipColors } from "./examples/colors";
import { ChipCustomize } from "./examples/customize";
import { ChipRadius } from "./examples/radius";
import { ChipSizes } from "./examples/sizes";
import { StartEndContent } from "./examples/start-end-content";
import { ChipUsage } from "./examples/usage";
import { ChipVariants } from "./examples/variants";
import { ChipVariantsColors } from "./examples/variants-colors";
import { ChipWithDelete } from "./examples/with-delete";

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
      <VariantWrapper heading="Colors" code={code("colors")}>
        <ChipColors />
      </VariantWrapper>
      <VariantWrapper heading="Variants" code={code("variants")}>
        <ChipVariants />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <ChipSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <ChipRadius />
      </VariantWrapper>
      <VariantWrapper
        heading="Start & End Content"
        code={code("start-end-content")}
      >
        <StartEndContent />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <ChipBordered />
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
      <VariantWrapper heading="Customize" code={code("customize")}>
        <ChipCustomize />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Chip;
