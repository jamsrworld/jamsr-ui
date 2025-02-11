import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { IFrameExample } from "@/components/iframe-example";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";

const title = "Header";
const description =
  "A prominent and customizable component that displays key information, navigation elements, or branding at the top of a page or section, providing a clear structure to the layout.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["header"][number]>(variant: T) =>
  readVariantCode("header", variant);

const Header = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <IFrameExample src="/examples/header/default" />
      </VariantWrapper>
      <VariantWrapper heading="Hide On Scroll" code={code("hide-on-scroll")}>
        <IFrameExample src="/examples/header/hide-on-scroll" />
      </VariantWrapper>
      <VariantWrapper heading="Static" code={code("static")}>
        <IFrameExample src="/examples/header/static" />
      </VariantWrapper>
      <VariantWrapper heading="With Border" code={code("with-border")}>
        <IFrameExample src="/examples/header/with-border" />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Header;
