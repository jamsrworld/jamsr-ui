import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { DrawerAnchors } from "./variants/anchors";
import { DrawerDefault } from "./variants/default";
import { DrawerSize } from "./variants/size";

export const metadata: Metadata = {
  title: "Drawer",
};

const Drawer = () => {
  return (
    <VariantPage heading="Drawer">
      <VariantWrapper heading="Default">
        <DrawerDefault />
      </VariantWrapper>
      <VariantWrapper heading="Size">
        <DrawerSize />
      </VariantWrapper>
      <VariantWrapper heading="Anchor">
        <DrawerAnchors />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Drawer;
