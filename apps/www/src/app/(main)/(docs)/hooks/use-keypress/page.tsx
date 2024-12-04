import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { UseKeypressAll } from "./examples/all";
import { UseKeypressMultiple } from "./examples/multiple";
import { UseKeypressSingle } from "./examples/single";

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
