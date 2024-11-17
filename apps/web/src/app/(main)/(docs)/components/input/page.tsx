import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { InputControlled } from "./variants/controlled";
import { InputDefault } from "./variants/default";
import { InputDisabled } from "./variants/disabled";
import { InputErrorState } from "./variants/error-state";
import { InputHelperText } from "./variants/helper-text";
import { InputLabelHelper } from "./variants/label-helper";
import { InputNumberOnly } from "./variants/numbers-only";
import { InputOptional } from "./variants/optional";
import { InputOutlinedAllProps } from "./variants/outlined-all-props";
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

const code = <T extends VariantTypes["input"][number]>(variant: T) =>
  readVariantCode("input", variant);

const Input = () => {
  return (
    <VariantPage heading="Input">
      <VariantWrapper heading="Default" code={code("default")}>
        <InputDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <InputControlled />
      </VariantWrapper>
      <VariantWrapper heading="Variant" code={code("variants")}>
        <InputVariants />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text" code={code("helper-text")}>
        <InputHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Error State" code={code("error-state")}>
        <InputErrorState />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <InputDisabled />
      </VariantWrapper>
      <VariantWrapper
        heading="With Placeholder"
        code={code("with-placeholder")}
      >
        <InputWithPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Without Label" code={code("without-label")}>
        <InputWithoutLabel />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content"
        code={code("with-start-content")}
      >
        <InputWithStartContent />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content"
        code={code("with-end-content")}
      >
        <InputWithEndContent />
      </VariantWrapper>
      <VariantWrapper heading="With Icon" code={code("with-icon")}>
        <InputWithIcon />
      </VariantWrapper>
      <VariantWrapper heading="Required" code={code("required")}>
        <InputRequired />
      </VariantWrapper>
      <VariantWrapper heading="Optional" code={code("optional")}>
        <InputOptional />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <InputSizes />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder" code={code("placeholder")}>
        <InputPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Label Helper" code={code("label-helper")}>
        <InputLabelHelper />
      </VariantWrapper>
      <VariantWrapper heading="Secured Text" code={code("secured-text")}>
        <InputSecuredText />
      </VariantWrapper>
      <VariantWrapper heading="Numbers Only" code={code("numbers-only")}>
        <InputNumberOnly />
      </VariantWrapper>
      <VariantWrapper
        heading="Outlined All Props"
        code={code("outlined-all-props")}
      >
        <InputOutlinedAllProps />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Input;
