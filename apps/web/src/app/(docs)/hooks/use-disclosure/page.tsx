import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { UseDisclosureDefault } from "./variants/default";

const UseHover = () => {
  return (
    <VariantPage heading="Use Disclosure">
      <VariantWrapper heading="Default">
        <UseDisclosureDefault />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
