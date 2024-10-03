import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { ChipDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Chip",
};

const Chip = () => {
  return (
    <VariantPage heading="Chip">
      <VariantWrapper heading="Default">
        <ChipDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Chip;
