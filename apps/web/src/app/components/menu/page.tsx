import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
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
    </VariantPage>
  );
};
export default Menu;
