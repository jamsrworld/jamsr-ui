import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { MenuWithArrow } from "./variants/with-arrow";
import { MenuDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Menu",
};

const code = <T extends VariantTypes["menu"][number]>(variant: T) =>
  readVariantCode("menu", variant);

const Menu = () => {
  return (
    <VariantPage heading="Menu">
      <VariantWrapper heading="Default" code={code("default")}>
        <MenuDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <MenuWithArrow />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Menu;
