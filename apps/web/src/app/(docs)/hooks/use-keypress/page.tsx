import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { UseKeypressAll } from "./variants/all";
import { UseKeypressMultiple } from "./variants/multiple";
import { UseKeypressSingle } from "./variants/single";

const UseHover = () => {
  return (
    <VariantPage heading="Use Keypress">
      <VariantWrapper heading="Listen all">
        <UseKeypressAll />
      </VariantWrapper>
      <VariantWrapper heading="Listen single key">
        <UseKeypressSingle />
      </VariantWrapper>
      <VariantWrapper heading="Listen multiple keys">
        <UseKeypressMultiple />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
