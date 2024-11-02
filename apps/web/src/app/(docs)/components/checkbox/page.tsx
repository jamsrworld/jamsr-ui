import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { CheckboxControlled } from "./variants/controlled";
import { CheckboxDefault } from "./variants/default";
import { CheckboxDisabled } from "./variants/disabled";
import { CheckboxInvalidState } from "./variants/invalid-state";
import { CheckboxReadonly } from "./variants/readonly";

export const metadata: Metadata = {
  title: "Checkbox",
};

const Checkbox = () => {
  return (
    <VariantPage heading="Checkbox">
      <VariantWrapper heading="Default">
        <CheckboxDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <CheckboxControlled />
      </VariantWrapper>
      <VariantWrapper heading="Readonly">
        <CheckboxReadonly />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <CheckboxDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State">
        <CheckboxInvalidState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Checkbox;
