import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { PopoverDefault } from "./variants/default";
import { PopoverWithArrow } from "./variants/with-arrow";
import { PopoverTriggerOnHover } from "./variants/trigger-on";

export const metadata: Metadata = {
  title: "Popover",
};

const code = <T extends VariantTypes["popover"][number]>(variant: T) =>
  readVariantCode("popover", variant);

const Popover = () => {
  return (
    <VariantPage heading="Popover">
      <VariantWrapper heading="Default" code={code("default")}>
        <PopoverDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <PopoverWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Trigger On Hover" code={code("trigger-on")}>
        <PopoverTriggerOnHover />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Popover;
