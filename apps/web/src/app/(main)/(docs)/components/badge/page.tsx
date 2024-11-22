import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { BadgeColors } from "./variants/colors";
import { BadgeUsage } from "./variants/usage";
import { BadgeSizes } from "./variants/sizes";

const title = "Badge";
const description =
  "Badge is a small label used to highlight an item's status for quick recognition.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["badge"][number]>(variant: T) =>
  readVariantCode("badge", variant);

const Badge = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <BadgeUsage />
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
