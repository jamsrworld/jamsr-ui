import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { CheckboxControlled } from "./variants/controlled";
import { CheckboxUsage } from "./variants/usage";
import { CheckboxDisabled } from "./variants/disabled";
import { CheckboxInvalidState } from "./variants/invalid-state";
import { CheckboxReadonly } from "./variants/readonly";


const title = "Checkbox";
const description =
  "Checkboxes enable users to select multiple items from a list or to indicate a single item as selected.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["checkbox"][number]>(variant: T) =>
  readVariantCode("checkbox", variant);

const Checkbox = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <CheckboxUsage />
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
