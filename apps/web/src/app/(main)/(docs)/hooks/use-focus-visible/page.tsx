import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
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
