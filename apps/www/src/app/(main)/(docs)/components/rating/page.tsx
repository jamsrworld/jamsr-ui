import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RatingControlled } from "./examples/controlled";
import { RatingUsage } from "./examples/usage";
import { RatingUsageValue } from "./examples/default-value";
import { RatingDisabled } from "./examples/disabled";
import { RatingHelperText } from "./examples/helper-text";
import { RatingInvalid } from "./examples/invalid";
import { RatingReadonly } from "./examples/readonly";
import { RatingSize } from "./examples/size";

export const metadata: Metadata = {
  title: "Rating",
};

const code = <T extends VariantTypes["rating"][number]>(variant: T) =>
  readVariantCode("rating", variant);

const Rating = () => {
  return (
    <VariantPage heading="Rating">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <RatingUsage />
      </VariantWrapper>
      <VariantWrapper heading="Size" code={code("size")}>
        <RatingSize />
      </VariantWrapper>
      <VariantWrapper heading="Readonly" code={code("readonly")}>
        <RatingReadonly />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <RatingDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value" code={code("default-value")}>
        <RatingUsageValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <RatingControlled />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text" code={code("helper-text")}>
        <RatingHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Invalid" code={code("invalid")}>
        <RatingInvalid />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Rating;
