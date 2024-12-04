import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RippleAtCenter } from "./variants/center";
import { RippleUsage } from "./variants/usage";

export const metadata: Metadata = {
  title: "Ripple",
};

const code = <T extends VariantTypes["ripple"][number]>(variant: T) =>
  readVariantCode("ripple", variant);

const Ripple = () => {
  return (
    <VariantPage heading="Ripple">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <RippleUsage />
      </VariantWrapper>
      <VariantWrapper heading="Center" code={code("center")}>
        <RippleAtCenter />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Ripple;
