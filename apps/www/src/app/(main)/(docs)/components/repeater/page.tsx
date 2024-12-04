import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RepeaterUsage } from "./examples/usage";
import { RepeaterIndex } from "./examples";

export const metadata: Metadata = {
  title: "Repeater",
};

const code = <T extends VariantTypes["repeater"][number]>(variant: T) =>
  readVariantCode("repeater", variant);

const Repeater = () => {
  return (
    <VariantPage heading="Repeater">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <RepeaterUsage />
      </VariantWrapper>
      <VariantWrapper heading="Index" code={code("index")}>
        <RepeaterIndex />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Repeater;
