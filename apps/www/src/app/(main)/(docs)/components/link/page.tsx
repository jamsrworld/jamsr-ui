import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { LinkUsage } from "./examples/usage";
import { LinkUnderline } from "./examples/underline";

const title = "Link";
const description =
  "A component that provides a clickable text or element, directing users to another page or section within an application or external source.";


const code = <T extends VariantTypes["link"][number]>(variant: T) =>
  readVariantCode("link", variant);

const Link = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <LinkUsage />
      </VariantWrapper>
      <VariantWrapper heading="Underline" code={code("underline")}>
        <LinkUnderline />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Link;
