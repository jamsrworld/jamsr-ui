import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseEventListenerUsage } from "./variants/usage";

const UseHover = () => {
  return (
    <VariantPage heading="Use Event Listener">
      <VariantWrapper heading="Usage">
        <UseEventListenerUsage />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
