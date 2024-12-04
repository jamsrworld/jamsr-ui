import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseHoverUsage } from "./variants/usage";
import { UseHoverDelay } from "./variants/timeout";

const UseHover = () => {
  return (
    <VariantPage heading="Use Hover">
      <VariantWrapper
        heading="Usage"
        description="Enter delay and exit delay of 0"
      >
        <UseHoverUsage />
      </VariantWrapper>
      <VariantWrapper
        heading="With Delay"
        description="Enter delay and exit delay of 500ms"
      >
        <UseHoverDelay />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
