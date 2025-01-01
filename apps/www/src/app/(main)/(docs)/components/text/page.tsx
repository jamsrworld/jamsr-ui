import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { TextAll } from "./examples/all";
import { TextUsage } from "./examples/usage";

const title = "Text";
const description =
  "Text refers to the style, arrangement, and appearance of text. It is essential in design to ensure readability, hierarchy, and consistency in the presentation of written content across a user interface.";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["text"][number]>(variant: T) =>
  readVariantCode("text", variant);

const Text = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <TextUsage />
      </VariantWrapper>
      <VariantWrapper heading="All" code={code("all")}>
        <TextAll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Text;
