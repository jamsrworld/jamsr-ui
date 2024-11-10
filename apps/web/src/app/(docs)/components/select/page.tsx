import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SelectControlled } from "./variants/controlled";
import { SelectCustomRenderComplex } from "./variants/custom-render-complex";
import { SelectCustomRenderMulti } from "./variants/custom-render-multi";
import { SelectCustomRenderValue } from "./variants/custom-render-value";
import { SelectDefault } from "./variants/default";
import { SelectInvalidState } from "./variants/invalid-state";
import { SelectMultiple } from "./variants/multiple";
import { SelectMultipleControlled } from "./variants/multiple-controlled";
import { SelectPlaceholder } from "./variants/placeholder";
import { SelectSizes } from "./variants/sizes";
import { SelectStartEndItems } from "./variants/start-end-items";
import { SelectWithHelperText } from "./variants/with-helper-text";
import { SelectWithoutLabel } from "./variants/without-label";

export const metadata: Metadata = {
  title: "Select",
};

const code = <T extends VariantTypes["select"][number]>(variant: T) =>
  readVariantCode("select", variant);

const Select = () => {
  return (
    <VariantPage heading="Select">
      <VariantWrapper heading="Default" code={code("default")}>
        <SelectDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <SelectControlled />
      </VariantWrapper>
      <VariantWrapper heading="Start End Items" code={code("start-end-items")}>
        <SelectStartEndItems />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder" code={code("placeholder")}>
        <SelectPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Without Label" code={code("without-label")}>
        <SelectWithoutLabel />
      </VariantWrapper>
      <VariantWrapper
        heading="With Helper Text"
        code={code("with-helper-text")}
      >
        <SelectWithHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid-state")}>
        <SelectInvalidState />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <SelectSizes />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Render Value"
        code={code("custom-render-value")}
      >
        <SelectCustomRenderValue />
      </VariantWrapper>
      <VariantWrapper heading="Multiple" code={code("multiple")}>
        <SelectMultiple />
      </VariantWrapper>
      <VariantWrapper
        heading="Multiple Controlled"
        code={code("multiple-controlled")}
      >
        <SelectMultipleControlled />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Render Complex"
        code={code("custom-render-complex")}
      >
        <SelectCustomRenderComplex />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Render Multi"
        code={code("custom-render-multi")}
      >
        <SelectCustomRenderMulti />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Select;
