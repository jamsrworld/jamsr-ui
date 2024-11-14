import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { BadgeColors } from "./variants/colors";
import { BadgeDefault } from "./variants/default";
import { BadgeSizes } from "./variants/sizes";

export const metadata: Metadata = {
  title: "Badge",
};

const code = <T extends VariantTypes["badge"][number]>(variant: T) =>
  readVariantCode("badge", variant);

const Badge = () => {
  return (
    <VariantPage heading="Badge">
      <VariantWrapper heading="Default" code={code("default")}>
        <BadgeDefault />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <BadgeSizes />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <BadgeColors />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Badge;
