import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { UsePressDefault } from "./variants/default";

const UseHover = () => {
  return (
    <VariantPage heading="Use Press">
      <VariantWrapper
        heading="Default"
        description="Also see the logs to see the press events"
      >
        <UsePressDefault />
      </VariantWrapper>
    </VariantPage>
  );
};

export default UseHover;
