import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SwitchUsage } from "./examples/usage";
import { SwitchDescription } from "./examples/description";
import { SwitchInvalidState } from "./examples/invalid-state";
import { SwitchLabelPlacement } from "./examples/label-placement";

export const metadata: Metadata = {
  title: "Switch",
};

const code = <T extends VariantTypes["switch"][number]>(variant: T) =>
  readVariantCode("switch", variant);

const Switch = () => {
  return (
    <VariantPage heading="Switch">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <SwitchUsage />
      </VariantWrapper>
      <VariantWrapper heading="Description" code={code("description")}>
        <SwitchDescription />
      </VariantWrapper>
      <VariantWrapper heading="Label Placement" code={code("label-placement")}>
        <SwitchLabelPlacement />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid-state")}>
        <SwitchInvalidState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Switch;
