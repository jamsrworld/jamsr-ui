import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { ChipUsage } from "./variants/usage";
import { ChipOnDelete } from "./variants/on-delete";

const title = "Chip";
const description =
  "A Chip is a small block of essential information that represent an input, attribute, or action.";

export const metadata: Metadata = {
  title,
  description,
};
const code = <T extends VariantTypes["chip"][number]>(variant: T) =>
  readVariantCode("chip", variant);

const Chip = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <ChipUsage />
      </VariantWrapper>
      <VariantWrapper heading="On Delete" code={code("on-delete")}>
        <ChipOnDelete />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Chip;
