import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { MenuWithArrow } from "./variants/arrow";
import { MenuDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Menu",
};

const Menu = () => {
  return (
    <VariantPage heading="Menu">
      <VariantWrapper heading="Default">
        <MenuDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow">
        <MenuWithArrow />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Menu;
