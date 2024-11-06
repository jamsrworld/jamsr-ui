import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { ChipDefault } from "./variants/default";
import { ChipOnDelete } from "./variants/on-delete";

export const metadata: Metadata = {
  title: "Chip",
};

const Chip = () => {
  return (
    <VariantPage heading="Chip">
      <VariantWrapper heading="Default">
        <ChipDefault />
      </VariantWrapper>
      <VariantWrapper heading="On Delete">
        <ChipOnDelete />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Chip;
