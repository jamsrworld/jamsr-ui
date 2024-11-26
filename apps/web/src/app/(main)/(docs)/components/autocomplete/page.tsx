import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { AutocompleteChooseCountry } from "./variants/choose-country";
import { AutocompleteControlled } from "./variants/controlled";
import { AutocompleteErrorState } from "./variants/error-state";
import { AutocompleteHelperText } from "./variants/helper-text";
import { AutocompleteMultiple } from "./variants/multiple";
import { AutocompleteMultipleCustomRender } from "./variants/multiple-custom-render";
import { AutocompleteStartEndContent } from "./variants/start-end-content";
import { AutocompleteUsage } from "./variants/usage";

const title = "Autocomplete";
const description =
  "The autocomplete is a normal text input enhanced by a panel of suggested options.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["autocomplete"][number]>(variant: T) =>
  readVariantCode("autocomplete", variant);

const Autocomplete = () => {
  return (
    <VariantPage heading="Autocomplete" description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <AutocompleteUsage />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text" code={code("helper-text")}>
        <AutocompleteHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <AutocompleteControlled />
      </VariantWrapper>
      <VariantWrapper heading="Error State" code={code("error-state")}>
        <AutocompleteErrorState />
      </VariantWrapper>
      <VariantWrapper
        heading="Start End Content"
        code={code("start-end-content")}
      >
        <AutocompleteStartEndContent />
      </VariantWrapper>
      <VariantWrapper heading="Select Country" code={code("choose-country")}>
        <AutocompleteChooseCountry />
      </VariantWrapper>
      <VariantWrapper heading="Multiple Values" code={code("multiple")}>
        <AutocompleteMultiple />
      </VariantWrapper>
      <VariantWrapper
        heading="Multiple Custom Render"
        code={code("multiple-custom-render")}
      >
        <AutocompleteMultipleCustomRender />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Autocomplete;
