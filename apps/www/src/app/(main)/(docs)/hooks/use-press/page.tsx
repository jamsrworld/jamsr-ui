import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UsePressUsage } from "./examples/usage";

const UseHover = () => {
  return (
    <VariantPage heading="Use Press">
      <VariantWrapper
        heading="Usage"
        description="Also see the logs to see the press events"
      >
        <UsePressUsage />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
