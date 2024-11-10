import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { TypographyAll } from "./variants/all";
import { TypographyDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Typography",
};

const code = <T extends VariantTypes["typography"][number]>(variant: T) =>
  readVariantCode("typography", variant);

const Typography = () => {
  return (
    <VariantPage heading="Typography">
      <VariantWrapper heading="Default" code={code("default")}>
        <TypographyDefault />
      </VariantWrapper>
      <VariantWrapper heading="All" code={code("all")}>
        <TypographyAll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Typography;
