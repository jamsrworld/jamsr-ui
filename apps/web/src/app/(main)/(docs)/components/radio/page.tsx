import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RadioChecked } from "./variants/checked";
import { RadioColors } from "./variants/colors";
import { RadioDefault } from "./variants/default";
import { RadioGroupDisabled } from "./variants/disabled";
import { RadioGroupInvalid } from "./variants/invalid";
import { RadioGroupDefault } from "./variants/radio-group";
import { RadioGroupControlled } from "./variants/radio-group-controlled";
import { RadioGroupCustom } from "./variants/radio-group-custom";
import { RadioSizes } from "./variants/sizes";

export const metadata: Metadata = {
  title: "Radio",
};

const code = <T extends VariantTypes["radio"][number]>(variant: T) =>
  readVariantCode("radio", variant);

const Radio = () => {
  return (
    <VariantPage heading="Radio">
      <VariantWrapper heading="Default" code={code("default")}>
        <RadioDefault />
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
        <RadioGroupDefault />
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
