import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { InputControlled } from "./variants/controlled";
import { InputDefault } from "./variants/default";
import { InputDisabled } from "./variants/disabled";
import { InputErrorState } from "./variants/error-state";
import { InputHelperText } from "./variants/helper-text";
import { InputLabelHelper } from "./variants/label-helper";
import { InputOptional } from "./variants/optional";
import { InputPlaceholder } from "./variants/placeholder";
import { InputRequired } from "./variants/required";
import { InputSecuredText } from "./variants/secured-text";
import { InputSizes } from "./variants/sizes";
import { InputVariants } from "./variants/variants";
import { InputWithEndContent } from "./variants/with-end-content";
import { InputWithIcon } from "./variants/with-icon";
import { InputWithPlaceholder } from "./variants/with-placeholder";
import { InputWithStartContent } from "./variants/with-start-content";
import { InputWithoutLabel } from "./variants/without-label";

export const metadata: Metadata = {
  title: "Input",
};

const Input = () => {
  return (
    <VariantPage heading="Input">
      <VariantWrapper heading="Default">
        <InputDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <InputControlled />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text">
        <InputHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Error State">
        <InputErrorState />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <InputDisabled />
      </VariantWrapper>
      <VariantWrapper heading="With Placeholder">
        <InputWithPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="WithoutLabel">
        <InputWithoutLabel />
      </VariantWrapper>
      <VariantWrapper heading="With Start Content">
        <InputWithStartContent />
      </VariantWrapper>
      <VariantWrapper heading="With End Content">
        <InputWithEndContent />
      </VariantWrapper>
      <VariantWrapper heading="WithIcon">
        <InputWithIcon />
      </VariantWrapper>
      <VariantWrapper heading="Required">
        <InputRequired />
      </VariantWrapper>
      <VariantWrapper heading="Optional">
        <InputOptional />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <InputSizes />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder">
        <InputPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Variant">
        <InputVariants />
      </VariantWrapper>
      <VariantWrapper heading="LabelHelper">
        <InputLabelHelper />
      </VariantWrapper>
      <VariantWrapper heading="SecuredText">
        <InputSecuredText />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Input;
