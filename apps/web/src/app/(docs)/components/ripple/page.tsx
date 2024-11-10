import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RippleAtCenter } from "./variants/center";
import { RippleDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Ripple",
};

const code = <T extends VariantTypes["ripple"][number]>(variant: T) =>
  readVariantCode("ripple", variant);

const Ripple = () => {
  return (
    <VariantPage heading="Ripple">
      <VariantWrapper heading="Default" code={code("default")}>
        <RippleDefault />
      </VariantWrapper>
      <VariantWrapper heading="Center" code={code("center")}>
        <RippleAtCenter />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Ripple;
