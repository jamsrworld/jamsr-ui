import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { RepeaterDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Repeater",
};

const Repeater = () => {
  return (
    <VariantPage heading="Repeater">
      <VariantWrapper heading="Default">
        <RepeaterDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Repeater;
