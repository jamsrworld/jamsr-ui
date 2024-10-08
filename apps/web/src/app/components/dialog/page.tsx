import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DialogDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Dialog",
};

const Dialog = () => {
  return (
    <VariantPage heading="Dialog">
      <VariantWrapper heading="Default">
        <DialogDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Dialog;
