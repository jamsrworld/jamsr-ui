import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { ConfirmationUsage } from "./variants/usage";
import { ConfirmationColors } from "./variants/colors";

export const metadata: Metadata = {
  title: "Confirmation",
};

const code = <T extends VariantTypes["confirmation"][number]>(variant: T) =>
  readVariantCode("confirmation", variant);

const Confirmation = () => {
  return (
    <VariantPage heading="Confirmation">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <ConfirmationUsage />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <ConfirmationColors />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Confirmation;
