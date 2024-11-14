import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { ChipDefault } from "./variants/default";
import { ChipOnDelete } from "./variants/on-delete";

export const metadata: Metadata = {
  title: "Chip",
};

const code = <T extends VariantTypes["chip"][number]>(variant: T) =>
  readVariantCode("chip", variant);

const Chip = () => {
  return (
    <VariantPage heading="Chip">
      <VariantWrapper heading="Default" code={code("default")}>
        <ChipDefault />
      </VariantWrapper>
      <VariantWrapper heading="On Delete" code={code("on-delete")}>
        <ChipOnDelete />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Chip;
