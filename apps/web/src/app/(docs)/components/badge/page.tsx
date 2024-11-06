import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { BadgeColors } from "./variants/colors";
import { BadgeDefault } from "./variants/default";
import { BadgeSizes } from "./variants/sizes";

export const metadata: Metadata = {
  title: "Badge",
};

const Badge = () => {
  return (
    <VariantPage heading="Badge">
      <VariantWrapper heading="Default">
        <BadgeDefault />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <BadgeSizes />
      </VariantWrapper>
      <VariantWrapper heading="Colors">
        <BadgeColors />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Badge;
