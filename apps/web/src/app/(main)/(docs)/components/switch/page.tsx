import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SwitchDefault } from "./variants/default";
import { SwitchDescription } from "./variants/description";
import { SwitchInvalidState } from "./variants/invalid-state";
import { SwitchLabelPlacement } from "./variants/label-placement";

export const metadata: Metadata = {
  title: "Switch",
};

const code = <T extends VariantTypes["switch"][number]>(variant: T) =>
  readVariantCode("switch", variant);

const Switch = () => {
  return (
    <VariantPage heading="Switch">
      <VariantWrapper heading="Default" code={code("default")}>
        <SwitchDefault />
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
