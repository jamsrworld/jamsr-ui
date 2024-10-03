import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { PopoverDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Popover",
};

const Popover = () => {
  return (
    <VariantPage heading="Popover">
      <VariantWrapper heading="Default">
        <PopoverDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Popover;
