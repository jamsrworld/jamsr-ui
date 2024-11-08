import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { PopoverDefault } from "./variants/default";
import { PopoverWithArrow } from "./variants/with-arrow";
import { PopoverTriggerOnHover } from "./variants/trigger-on";

export const metadata: Metadata = {
  title: "Popover",
};

const Popover = () => {
  return (
    <VariantPage heading="Popover">
      <VariantWrapper heading="Default">
        <PopoverDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow">
        <PopoverWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Trigger On Hover">
        <PopoverTriggerOnHover />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Popover;
