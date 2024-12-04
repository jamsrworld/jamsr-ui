import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseFocusUsage } from "./examples/usage";

const UseHover = () => {
  return (
    <VariantPage heading="Use Focus">
      <VariantWrapper heading="Usage">
        <UseFocusUsage />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
