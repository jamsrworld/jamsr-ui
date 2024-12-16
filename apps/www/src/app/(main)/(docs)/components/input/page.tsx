import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { InputClearable } from "./examples/clearable";
import { InputControlled } from "./examples/controlled";
import { InputDisabled } from "./examples/disabled";
import { InputErrorState } from "./examples/error-state";
import { InputFilled } from "./examples/filled";
import { InputHelperText } from "./examples/helper-text";
import { InputLabelHelper } from "./examples/label-helper";
import { InputNumberOnly } from "./examples/numbers-only";
import { InputOptional } from "./examples/optional";
import { InputOutlinedAllProps } from "./examples/outlined-all-props";
import { InputPlaceholder } from "./examples/placeholder";
import { InputRadius } from "./examples/radius";
import { InputRequired } from "./examples/required";
import { InputSecuredText } from "./examples/secured-text";
import { InputSizes } from "./examples/sizes";
import { InputUsage } from "./examples/usage";
import { InputVariants } from "./examples/variants";
import { InputWithEndContent } from "./examples/with-end-content";
import { InputWithIcon } from "./examples/with-icon";
import { InputWithPlaceholder } from "./examples/with-placeholder";
import { InputWithStartContent } from "./examples/with-start-content";
import { InputWithoutLabel } from "./examples/without-label";

const title = "Input";
const description =
  "A form element that allows users to input and submit data, supporting various types such as text, numbers, and more for seamless data entry.";

const code = <T extends VariantTypes["input"][number]>(variant: T) =>
  readVariantCode("input", variant);

const Input = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <InputUsage />
      </VariantWrapper>
    
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <InputControlled />
      </VariantWrapper>
      <VariantWrapper heading="Variant" code={code("variants")}>
        <InputVariants />
      </VariantWrapper>
      <VariantWrapper heading="Filled" code={code("filled")}>
        <InputFilled />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <InputSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <InputRadius />
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
      <VariantWrapper heading="Clearable" code={code("clearable")}>
        <InputClearable />
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
