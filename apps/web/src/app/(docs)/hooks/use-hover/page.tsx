import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { UseHoverDefault } from "./variants/default";
import { UseHoverDelay } from "./variants/timeout";

const UseHover = () => {
  return (
    <VariantPage heading="Use Hover">
      <VariantWrapper
        heading="Default"
        description="Enter delay and exit delay of 0"
      >
        <UseHoverDefault />
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
