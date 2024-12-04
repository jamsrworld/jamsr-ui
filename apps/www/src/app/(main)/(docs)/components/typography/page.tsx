import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TypographyAll } from "./examples/all";
import { TypographyUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Typography",
};

const code = <T extends VariantTypes["typography"][number]>(variant: T) =>
  readVariantCode("typography", variant);

const Typography = () => {
  return (
    <VariantPage heading="Typography">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <TypographyUsage />
      </VariantWrapper>
      <VariantWrapper heading="All" code={code("all")}>
        <TypographyAll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Typography;
