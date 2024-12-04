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

export const metadata: Metadata = {
  title: "Radio",
};

const code = <T extends VariantTypes["radio"][number]>(variant: T) =>
  readVariantCode("radio", variant);

const Radio = () => {
  return (
    <VariantPage heading="Radio">
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
