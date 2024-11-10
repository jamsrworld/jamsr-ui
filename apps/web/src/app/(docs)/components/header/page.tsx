import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { HeaderDefault } from "./variants/default";
import { HeaderHideOnScroll } from "./variants/hide-on-scroll";

export const metadata: Metadata = {
  title: "Header",
};

const code = <T extends VariantTypes["header"][number]>(variant: T) =>
  readVariantCode("header", variant);

const Header = () => {
  return (
    <VariantPage heading="Header">
      <VariantWrapper heading="Default" code={code("default")}>
        <HeaderDefault />
      </VariantWrapper>
      <VariantWrapper heading="Hide On Scroll" code={code("hide-on-scroll")}>
        <HeaderHideOnScroll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Header;
