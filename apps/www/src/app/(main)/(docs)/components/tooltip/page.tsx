import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { TooltipUsage } from "./examples/usage";
import { TooltipOffset } from "./examples/offset";
import { TooltipWithArrow } from "./examples/with-arrow";
import { TooltipRadius } from "./examples/radius";

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
      <VariantWrapper heading="Radius" code={code("radius")}>
        <TooltipRadius />
      </VariantWrapper>
      <VariantWrapper heading="Offset" code={code("offset")}>
        <TooltipOffset />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tooltip;
