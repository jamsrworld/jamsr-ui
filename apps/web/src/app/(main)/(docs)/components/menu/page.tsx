import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { MenuBackdrop } from "./variants/backdrop";
import { MenuControlled } from "./variants/controlled";
import { MenuCustomize } from "./variants/customize";
import { MenuNested } from "./variants/nested";
import { MenuOffset } from "./variants/offset";
import { MenuPlacement } from "./variants/placement";
import { MenuStartEndContent } from "./variants/start-end-content";
import { MenuTriggerOnHover } from "./variants/trigger-on-hover";
import { MenuUsage } from "./variants/usage";
import { MenuWithArrow } from "./variants/with-arrow";
import { MenuWithoutLockScroll } from "./variants/without-lock-scroll";

export const metadata: Metadata = {
  title: "Menu",
};

const code = <T extends VariantTypes["menu"][number]>(variant: T) =>
  readVariantCode("menu", variant);

const Menu = () => {
  return (
    <VariantPage heading="Menu">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <MenuUsage />
      </VariantWrapper>
      <VariantWrapper heading="Nested" code={code("nested")}>
        <MenuNested />
      </VariantWrapper>
      <VariantWrapper
        heading="Start End Content"
        code={code("start-end-content")}
      >
        <MenuStartEndContent />
      </VariantWrapper>
      <VariantWrapper
        heading="Trigger On Hover"
        code={code("trigger-on-hover")}
      >
        <MenuTriggerOnHover />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <MenuWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Placement" code={code("with-arrow")}>
        <MenuPlacement />
      </VariantWrapper>
      <VariantWrapper heading="Offset" code={code("offset")}>
        <MenuOffset />
      </VariantWrapper>
      <VariantWrapper heading="Backdrop" code={code("customize")}>
        <MenuBackdrop />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <MenuControlled />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Lock Scroll"
        code={code("without-lock-scroll")}
      >
        <MenuWithoutLockScroll />
      </VariantWrapper>
      <VariantWrapper heading="Customize" code={code("customize")}>
        <MenuCustomize />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Menu;
