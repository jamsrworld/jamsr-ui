import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { ShowUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Show",
};

const code = <T extends VariantTypes["show"][number]>(variant: T) =>
  readVariantCode("show", variant);

const Show = () => {
  return (
    <VariantPage heading="Show">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <ShowUsage />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Show;
