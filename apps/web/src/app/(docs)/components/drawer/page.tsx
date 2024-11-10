import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { DrawerAnchors } from "./variants/anchors";
import { DrawerDefault } from "./variants/default";
import { DrawerSize } from "./variants/size";

export const metadata: Metadata = {
  title: "Drawer",
};

const code = <T extends VariantTypes["drawer"][number]>(variant: T) =>
  readVariantCode("drawer", variant);

const Drawer = () => {
  return (
    <VariantPage heading="Drawer">
      <VariantWrapper heading="Default" code={code("default")}>
        <DrawerDefault />
      </VariantWrapper>
      <VariantWrapper heading="Size" code={code("size")}>
        <DrawerSize />
      </VariantWrapper>
      <VariantWrapper heading="Anchors" code={code("anchors")}>
        <DrawerAnchors />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Drawer;
