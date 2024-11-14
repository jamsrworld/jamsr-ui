import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseEventListenerDefault } from "./variants/default";

const UseHover = () => {
  return (
    <VariantPage heading="Use Event Listener">
      <VariantWrapper heading="Default">
        <UseEventListenerDefault />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
