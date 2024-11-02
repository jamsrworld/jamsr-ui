import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { SwitchDefault } from "./variants/default";
import { SwitchDescription } from "./variants/description";
import { SwitchInvalidState } from "./variants/invalid-state";
import { SwitchLabelPlacement } from "./variants/label-placement";

export const metadata: Metadata = {
  title: "Switch",
};

const Switch = () => {
  return (
    <VariantPage heading="Switch">
      <VariantWrapper heading="Default">
        <SwitchDefault />
      </VariantWrapper>
      <VariantWrapper heading="Description">
        <SwitchDescription />
      </VariantWrapper>
      <VariantWrapper heading="Label Placement">
        <SwitchLabelPlacement />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State">
        <SwitchInvalidState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Switch;
