import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { SwitchControlled } from "./examples/controlled";
import { SwitchDescription } from "./examples/description";
import { SwitchDisabled } from "./examples/disabled";
import { SwitchInvalidState } from "./examples/invalid-state";
import { SwitchLabelPlacement } from "./examples/label-placement";
import { SwitchReadonly } from "./examples/readonly";
import { SwitchUsage } from "./examples/usage";
import { SwitchWithLabel } from "./examples/with-label";

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
      <VariantWrapper heading="With Label" code={code("with-label")}>
        <SwitchWithLabel />
      </VariantWrapper>
      <VariantWrapper heading="Readonly" code={code("readonly")}>
        <SwitchReadonly />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <SwitchDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Description" code={code("description")}>
        <SwitchDescription />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <SwitchControlled />
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
