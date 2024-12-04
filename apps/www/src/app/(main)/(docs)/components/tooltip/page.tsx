import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { TooltipUsage } from "./variants/usage";
import { TooltipOffset } from "./variants/offset";
import { TooltipWithArrow } from "./variants/with-arrow";

export const metadata: Metadata = {
  title: "Tooltip",
};

const code = <T extends VariantTypes["tooltip"][number]>(variant: T) =>
  readVariantCode("tooltip", variant);

const Tooltip = () => {
  return (
    <VariantPage heading="Tooltip">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <TooltipUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <TooltipWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Offset" code={code("offset")}>
        <TooltipOffset />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tooltip;
