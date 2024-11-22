import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { ThemeUsage } from "./variants/usage";
import { ThemeTypography } from "./variants/typography";

export const metadata: Metadata = {
  title: "Theme",
};

const Theme = () => {
  return (
    <VariantPage heading="Theme">
      <VariantWrapper heading="Usage">
        <ThemeUsage />
      </VariantWrapper>
      <VariantWrapper heading="Typography">
        <ThemeTypography />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Theme;
