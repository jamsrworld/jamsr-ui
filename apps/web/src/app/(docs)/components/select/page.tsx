import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { SelectControlled } from "./variants/controlled";
import { SelectCustomRenderComplex } from "./variants/custom-render-complex";
import { SelectCustomRenderMulti } from "./variants/custom-render-multi";
import { SelectCustomRenderValue } from "./variants/custom-render-value";
import { SelectDefault } from "./variants/default";
import { SelectInvalidState } from "./variants/invalid-state";
import { SelectMultiple } from "./variants/multiple";
import { SelectMultipleControlled } from "./variants/multiple-controlled";
import { SelectPlaceholder } from "./variants/placeholder";
import { SelectSizes } from "./variants/size";
import { SelectStartEndItems } from "./variants/start-end-items";
import { SelectWithHelperText } from "./variants/with-helper-text";
import { SelectWithoutLabel } from "./variants/without-label";

export const metadata: Metadata = {
  title: "Select",
};

const Select = () => {
  return (
    <VariantPage heading="Select">
      <VariantWrapper heading="Default">
        <SelectDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <SelectControlled />
      </VariantWrapper>
      <VariantWrapper heading="Start End Items">
        <SelectStartEndItems />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder">
        <SelectPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Without Label">
        <SelectWithoutLabel />
      </VariantWrapper>
      <VariantWrapper heading="With Helper Text">
        <SelectWithHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State">
        <SelectInvalidState />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <SelectSizes />
      </VariantWrapper>
      <VariantWrapper heading="Custom Render Value">
        <SelectCustomRenderValue />
      </VariantWrapper>
      <VariantWrapper heading="Multiple">
        <SelectMultiple />
      </VariantWrapper>
      <VariantWrapper heading="Multiple Controlled">
        <SelectMultipleControlled />
      </VariantWrapper>
      <VariantWrapper heading="Custom Render Complex">
        <SelectCustomRenderComplex />
      </VariantWrapper>
      <VariantWrapper heading="Custom Render Multi">
        <SelectCustomRenderMulti />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Select;
