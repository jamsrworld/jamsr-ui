import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
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

const code = <T extends VariantTypes["tab"][number]>(variant: T) =>
  readVariantCode("tab", variant);

const Tab = () => {
  return (
    <VariantPage heading="Tab">
      <VariantWrapper heading="Default" code={code("default")}>
        <TabDefault />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <TabDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Disabled Item" code={code("disabled-item")}>
        <TabDisabledItem />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <TabSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <TabRadius />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <TabColors />
      </VariantWrapper>
      <VariantWrapper heading="Variants" code={code("variants")}>
        <TabVariants />
      </VariantWrapper>
      <VariantWrapper heading="As" code={code("as")}>
        <TabAs />
      </VariantWrapper>
      <VariantWrapper heading="Outside" code={code("outside")}>
        <TabOutside />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tab;
