import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { TooltipDefault } from "./variants/default";
import { TooltipInteractive } from "./variants/interactive";
import { TooltipOffset } from "./variants/offset";
import { TooltipWithArrow } from "./variants/with-arrow";

export const metadata: Metadata = {
  title: "Tooltip",
};

const Tooltip = () => {
  return (
    <VariantPage heading="Tooltip">
      <VariantWrapper heading="Default">
        <TooltipDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow">
        <TooltipWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Interactive">
        <TooltipInteractive />
      </VariantWrapper>
      <VariantWrapper heading="Offset">
        <TooltipOffset />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tooltip;
