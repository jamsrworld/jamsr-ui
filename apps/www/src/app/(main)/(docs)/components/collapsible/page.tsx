import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CollapsibleControlled } from "./examples/controlled";
import { CollapsibleUsage } from "./examples/usage";
import { CollapsibleWithIcon } from "./examples/with-icon";
import { CollapsibleWithState } from "./examples/with-state";

const title = "Collapsible";
const description = "";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["collapsible"][number]>(variant: T) =>
  readVariantCode("collapsible", variant);

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <CollapsibleUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Icon" code={code("with-icon")}>
        <CollapsibleWithIcon />
      </VariantWrapper>
      <VariantWrapper heading="State" code={code("with-state")}>
        <CollapsibleWithState />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <CollapsibleControlled />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
