import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { ConfirmationUsage } from "./examples/usage";
import { ConfirmationColors } from "./examples/colors";

const title = "Confirmation";
const description =
  "A clear and concise component designed to prompt users for confirmation before proceeding with critical actions, ensuring better decision-making and reducing errors.";

const code = <T extends VariantTypes["confirmation"][number]>(variant: T) =>
  readVariantCode("confirmation", variant);

const Confirmation = () => {
  return (
    <VariantPage heading={title} description={description}>
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
