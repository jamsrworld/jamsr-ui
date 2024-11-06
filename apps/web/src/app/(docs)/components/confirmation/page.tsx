import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { ConfirmationDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Confirmation",
};

const Confirmation = () => {
  return (
    <VariantPage heading="Confirmation">
      <VariantWrapper heading="Default">
        <ConfirmationDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Confirmation;
