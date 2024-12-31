import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CollapsibleUsage } from "./examples/usage";

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
    </VariantPage>
  );
};

export default Page;
