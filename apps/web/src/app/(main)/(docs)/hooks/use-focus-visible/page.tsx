import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseFocusVisibleUsage } from "./variants/default";

const UseFocusVisible = () => {
  return (
    <VariantPage heading="Use Focus Visible">
      <VariantWrapper heading="Usage">
        <UseFocusVisibleUsage />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseFocusVisible;
