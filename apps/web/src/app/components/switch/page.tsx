import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { SwitchDefault } from "./variants/default";
import { SwitchDescription } from "./variants/description";

export const metadata: Metadata = {
  title: "Switch",
};

const Switch = () => {
  return (
    <VariantPage heading="Switch">
      <VariantWrapper heading="Default">
        <SwitchDefault />
      </VariantWrapper>
      <VariantWrapper heading="Description">
        <SwitchDescription />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Switch;
