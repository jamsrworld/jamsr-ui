import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseFocusVisibleUsage } from "./examples/default";

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
