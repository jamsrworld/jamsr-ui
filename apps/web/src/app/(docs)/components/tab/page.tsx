import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { TabAs } from "./variants/as";
import { TabColors } from "./variants/colors";
import { TabDefault } from "./variants/default";
import { TabDisabled } from "./variants/disabled";
import { TabDisabledItem } from "./variants/disabled-item";
import { TabOutside } from "./variants/outside";
import { TabRadius } from "./variants/radius";
import { TabSizes } from "./variants/sizes";
import { TabVariants } from "./variants/variants";

export const metadata: Metadata = {
  title: "Tab",
};

const Tab = () => {
  return (
    <VariantPage heading="Tab">
      <VariantWrapper heading="Default">
        <TabDefault />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <TabDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Disabled Item">
        <TabDisabledItem />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <TabSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radius">
        <TabRadius />
      </VariantWrapper>
      <VariantWrapper heading="Colors">
        <TabColors />
      </VariantWrapper>
      <VariantWrapper heading="Variants">
        <TabVariants />
      </VariantWrapper>
      <VariantWrapper heading="As">
        <TabAs />
      </VariantWrapper>
      <VariantWrapper heading="Outside">
        <TabOutside />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tab;
