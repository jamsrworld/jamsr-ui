import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { LinkUnderline } from "./examples/underline";
import { LinkUsage } from "./examples/usage";
import { LinkGlobalConfig } from "./examples/global-config";

const title = "Link";
const description =
  "A component that provides a clickable text or element, directing users to another page or section within an application or external source.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["next-link"][number]>(variant: T) =>
  readVariantCode("link", variant, "next");

const Link = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <LinkUsage />
      </VariantWrapper>
      <VariantWrapper heading="Underline" code={code("underline")}>
        <LinkUnderline />
      </VariantWrapper>
      <VariantWrapper heading="Global Config" code={code("global-config")}>
        <LinkGlobalConfig />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Link;
