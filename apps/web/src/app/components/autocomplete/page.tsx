import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { AutocompleteChooseCountry } from "./variants/choose-country";
import { AutocompleteControlled } from "./variants/controlled";
import { AutocompleteDefault } from "./variants/default";
import { AutocompleteErrorState } from "./variants/error-state";
import { AutocompleteHelperText } from "./variants/helper-text";
import { AutocompleteMultiple } from "./variants/multiple";
import { AutocompleteMultipleControlled } from "./variants/multiple-controlled";
import { AutocompleteMultipleCustomRender } from "./variants/multiple-custom-render";
import { AutocompleteStartEndContent } from "./variants/start-end-content";

export const metadata: Metadata = {
  title: "Autocomplete",
};

const Autocomplete = () => {
  return (
    <VariantPage heading="Autocomplete">
      <VariantWrapper heading="Default">
        <AutocompleteDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <AutocompleteControlled />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text">
        <AutocompleteHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Error State">
        <AutocompleteErrorState />
      </VariantWrapper>
      <VariantWrapper heading="Start End Content">
        <AutocompleteStartEndContent />
      </VariantWrapper>
      <VariantWrapper heading="Choose Country">
        <AutocompleteChooseCountry />
      </VariantWrapper>
      <VariantWrapper heading="Multiple">
        <AutocompleteMultiple />
      </VariantWrapper>
      <VariantWrapper heading="Multiple Controlled">
        <AutocompleteMultipleControlled />
      </VariantWrapper>
      <VariantWrapper heading="Multiple CustomRender">
        <AutocompleteMultipleCustomRender />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Autocomplete;
