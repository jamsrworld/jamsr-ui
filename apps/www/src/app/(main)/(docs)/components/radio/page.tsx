import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RadioChecked } from "./examples/checked";
import { RadioColors } from "./examples/colors";
import { RadioUsage } from "./examples/usage";
import { RadioGroupDisabled } from "./examples/disabled";
import { RadioGroupInvalid } from "./examples/invalid";
import { RadioGroupUsage } from "./examples/radio-group";
import { RadioGroupControlled } from "./examples/radio-group-controlled";
import { RadioGroupCustom } from "./examples/radio-group-custom";
import { RadioSizes } from "./examples/sizes";

const title = "Radio";
const description =
  "Radio buttons are used for selecting one option from a set. They allow a single choice from a group of options, with only one option being selected at a time.";


  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["radio"][number]>(variant: T) =>
  readVariantCode("radio", variant);

const Radio = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <RadioUsage />
      </VariantWrapper>
      <VariantWrapper heading="Checked" code={code("checked")}>
        <RadioChecked />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <RadioColors />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <RadioSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radio Group" code={code("radio-group")}>
        <RadioGroupUsage />
      </VariantWrapper>
      <VariantWrapper
        heading="Radio Group Controlled"
        code={code("radio-group-controlled")}
      >
        <RadioGroupControlled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid" code={code("invalid")}>
        <RadioGroupInvalid />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <RadioGroupDisabled />
      </VariantWrapper>
      <VariantWrapper
        heading="Radio Group Custom"
        code={code("radio-group-custom")}
      >
        <RadioGroupCustom />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Radio;
