import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { RadioChecked } from "./variants/checked";
import { RadioColors } from "./variants/colors";
import { RadioDefault } from "./variants/default";
import { RadioGroupDisabled } from "./variants/disabled";
import { RadioGroupInvalid } from "./variants/invalid";
import { RadioGroupDefault } from "./variants/radio-group";
import { RadioGroupControlled } from "./variants/radio-group-controlled";
import { RadioGroupCustom } from "./variants/radio-group-custom";
import { RadioSizes } from "./variants/sizes";

export const metadata: Metadata = {
  title: "Radio",
};

const Radio = () => {
  return (
    <VariantPage heading="Radio">
      <VariantWrapper heading="Default">
        <RadioDefault />
      </VariantWrapper>
      <VariantWrapper heading="Checked">
        <RadioChecked />
      </VariantWrapper>
      <VariantWrapper heading="Colors">
        <RadioColors />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <RadioSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radio Group">
        <RadioGroupDefault />
      </VariantWrapper>
      <VariantWrapper heading="Radio Group Controlled">
        <RadioGroupControlled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid">
        <RadioGroupInvalid />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <RadioGroupDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Radio Group Custom">
        <RadioGroupCustom />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Radio;
