import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { RatingControlled } from "./variants/controlled";
import { RatingDefault } from "./variants/default";
import { RatingDefaultValue } from "./variants/default-value";
import { RatingDisabled } from "./variants/disabled";
import { RatingHelperText } from "./variants/helper-text";
import { RatingInvalid } from "./variants/invalid";
import { RatingReadonly } from "./variants/readonly";

export const metadata: Metadata = {
  title: "Rating",
};

const Rating = () => {
  return (
    <VariantPage heading="Rating">
      <VariantWrapper heading="Default">
        <RatingDefault />
      </VariantWrapper>
      <VariantWrapper heading="Readonly">
        <RatingReadonly />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <RatingDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value">
        <RatingDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <RatingControlled />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text">
        <RatingHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Invalid">
        <RatingInvalid />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Rating;
