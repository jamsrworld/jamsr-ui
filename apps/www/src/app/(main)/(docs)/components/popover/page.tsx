import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { PopoverControlled } from "./variants/controlled";
import { PopoverPlacement } from "./variants/placement";
import { PopoverTriggerOnHover } from "./variants/trigger-on";
import { PopoverUsage } from "./variants/usage";
import { PopoverWithArrow } from "./variants/with-arrow";
import { PopoverWithoutScroll } from "./variants/without-lock-scroll";

export const metadata: Metadata = {
  title: "Popover",
};

const code = <T extends VariantTypes["popover"][number]>(variant: T) =>
  readVariantCode("popover", variant);

const Popover = () => {
  return (
    <VariantPage heading="Popover">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <PopoverUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <PopoverWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Trigger On Hover" code={code("trigger-on")}>
        <PopoverTriggerOnHover />
      </VariantWrapper>
      <VariantWrapper heading="Placement" code={code("placement")}>
        <PopoverPlacement />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <PopoverControlled />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Lock Scroll"
        code={code("without-lock-scroll")}
      >
        <PopoverWithoutScroll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Popover;
