import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseFocusDefault } from "./variants/default";

const UseHover = () => {
  return (
    <VariantPage heading="Use Focus">
      <VariantWrapper heading="Default">
        <UseFocusDefault />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
