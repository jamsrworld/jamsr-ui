import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { CheckboxControlled } from "./variants/controlled";
import { CheckboxDefault } from "./variants/default";
import { CheckboxDisabled } from "./variants/disabled";
import { CheckboxInvalidState } from "./variants/invalid-state";
import { CheckboxReadonly } from "./variants/readonly";

export const metadata: Metadata = {
  title: "Checkbox",
};

const code = <T extends VariantTypes["checkbox"][number]>(variant: T) =>
  readVariantCode("checkbox", variant);

const Checkbox = () => {
  return (
    <VariantPage heading="Checkbox">
      <VariantWrapper heading="Default" code={code("default")}>
        <CheckboxDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <CheckboxControlled />
      </VariantWrapper>
      <VariantWrapper heading="Readonly" code={code("readonly")}>
        <CheckboxReadonly />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <CheckboxDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid-state")}>
        <CheckboxInvalidState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Checkbox;
