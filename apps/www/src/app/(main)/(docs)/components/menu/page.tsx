import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { MenuBackdrop } from "./examples/backdrop";
import { MenuColors } from "./examples/colors";
import { MenuControlled } from "./examples/controlled";
import { MenuCustomize } from "./examples/customize";
import { MenuNested } from "./examples/nested";
import { MenuOffset } from "./examples/offset";
import { MenuPlacement } from "./examples/placement";
import { MenuPreventClose } from "./examples/prevent-close";
import { MenuRadius } from "./examples/radius";
import { MenuStartEndContent } from "./examples/start-end-content";
import { MenuTriggerOnHover } from "./examples/trigger-on-hover";
import { MenuUsage } from "./examples/usage";
import { MenuWithArrow } from "./examples/with-arrow";
import { MenuWithoutLockScroll } from "./examples/without-lock-scroll";

const title = "Menu";
const description =
  "A navigational component that displays a list of options or actions, allowing users to select from various choices within an interface in a structured manner.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["menu"][number]>(variant: T) =>
  readVariantCode("menu", variant);

const Menu = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <MenuUsage />
      </VariantWrapper>
      <VariantWrapper heading="Placement" code={code("placement")}>
        <MenuPlacement />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("usage")}>
        <MenuRadius />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <MenuColors />
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
      <VariantWrapper heading="Prevent Close On Click " code={code("prevent-close")}>
        <MenuPreventClose />
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
