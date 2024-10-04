import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { HeaderDefault } from "./variants/default";
import { HeaderHideOnScroll } from "./variants/hide-on-scroll";

export const metadata: Metadata = {
  title: "Header",
};

const Header = () => {
  return (
    <VariantPage heading="Header">
      <VariantWrapper heading="Default">
        <HeaderDefault />
      </VariantWrapper>
      <VariantWrapper heading="Hide On Scroll">
        <HeaderHideOnScroll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Header;
