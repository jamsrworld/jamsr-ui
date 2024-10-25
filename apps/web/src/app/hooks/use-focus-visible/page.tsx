import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { UseFocusVisibleDefault } from "./variants/default";

const UseFocusVisible = () => {
  return (
    <VariantPage heading="Use Focus Visible">
      <VariantWrapper heading="Default">
        <UseFocusVisibleDefault />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseFocusVisible;
