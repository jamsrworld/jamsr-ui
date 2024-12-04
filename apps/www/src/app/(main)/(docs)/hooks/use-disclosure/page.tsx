import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseDisclosureUsage } from "./variants/usage";

const UseHover = () => {
  return (
    <VariantPage heading="Use Disclosure">
      <VariantWrapper heading="Usage">
        <UseDisclosureUsage />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
