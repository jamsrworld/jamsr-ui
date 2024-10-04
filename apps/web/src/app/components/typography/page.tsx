import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { TypographyAll } from "./variants/all";
import { TypographyDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Typography",
};

const Typography = () => {
  return (
    <VariantPage heading="Typography">
      <VariantWrapper heading="Default">
        <TypographyDefault />
      </VariantWrapper>
      <VariantWrapper heading="All">
        <TypographyAll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Typography;
