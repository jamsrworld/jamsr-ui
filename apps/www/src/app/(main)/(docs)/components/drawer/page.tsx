import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DrawerAnchors } from "./examples/anchors";
import { DrawerBackdrop } from "./examples/backdrop";
import { DrawerBordered } from "./examples/bordered";
import { DrawerCustomCloseBtn } from "./examples/custom-close-button";
import { DrawerCustomize } from "./examples/customize";
import { DrawerNonDismissible } from "./examples/non-dismissible";
import { DrawerScrollBehavior } from "./examples/scroll-behavior";
import { DrawerSize } from "./examples/size";
import { DrawerUsage } from "./examples/usage";
import { DrawerWithoutCloseButton } from "./examples/without-close-button";

export const metadata: Metadata = {
  title: "Drawer",
};

const code = <T extends VariantTypes["drawer"][number]>(variant: T) =>
  readVariantCode("drawer", variant);

const Drawer = () => {
  return (
    <VariantPage heading="Drawer">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DrawerUsage />
      </VariantWrapper>
      <VariantWrapper heading="Size" code={code("size")}>
        <DrawerSize />
      </VariantWrapper>
      <VariantWrapper heading="Anchors" code={code("anchors")}>
        <DrawerAnchors />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <DrawerBordered />
      </VariantWrapper>
      <VariantWrapper heading="Scroll Behavior" code={code("scroll-behavior")}>
        <DrawerScrollBehavior />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Close Btn"
        code={code("custom-close-button")}
      >
        <DrawerCustomCloseBtn />
      </VariantWrapper>
      <VariantWrapper heading="Backdrop" code={code("backdrop")}>
        <DrawerBackdrop />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Close Btn"
        code={code("without-close-button")}
      >
        <DrawerWithoutCloseButton />
      </VariantWrapper>
      <VariantWrapper heading="Non Dismissible" code={code("non-dismissible")}>
        <DrawerNonDismissible />
      </VariantWrapper>
      <VariantWrapper heading="Customize" code={code("customize")}>
        <DrawerCustomize />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Drawer;
