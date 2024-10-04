import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { CheckboxControlled } from "./variants/controlled";
import { CheckboxDefault } from "./variants/default";

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
    </VariantPage>
  );
};
export default Checkbox;
