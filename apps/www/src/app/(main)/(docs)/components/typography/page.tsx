import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TypographyAll } from "./examples/all";
import { TypographyUsage } from "./examples/usage";

const title = "Typography";
const description =
  "Typography refers to the style, arrangement, and appearance of text. It is essential in design to ensure readability, hierarchy, and consistency in the presentation of written content across a user interface.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["typography"][number]>(variant: T) =>
  readVariantCode("typography", variant);

const Typography = () => {
  return (
    <VariantPage heading={title} description={description}>
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
