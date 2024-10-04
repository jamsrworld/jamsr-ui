import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DrawerDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Drawer",
};

const Drawer = () => {
  return (
    <VariantPage heading="Drawer">
      <VariantWrapper heading="Default">
        <DrawerDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Drawer;
