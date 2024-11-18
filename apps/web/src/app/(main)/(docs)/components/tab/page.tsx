import { Code } from "@/components/code";
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
import { TabWithIcons } from "./variants/with-icons";

const title = "Tab";
const description =
  "Tabs structure content into organized sections, providing users with a streamlined way to navigate between them.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["tab"][number]>(variant: T) =>
  readVariantCode("tab", variant);

const Tab = () => {
  return (
    <VariantPage heading="Alert" description={description}>
      <VariantWrapper heading="Default" code={code("default")}>
        <TabDefault />
      </VariantWrapper>

      <VariantWrapper
        heading="Variants"
        code={code("variants")}
        description={
          <div>
            Use the <Code>variant</Code> prop to change the visual style of the
            tabs. Values can be <Code>underlined</Code>,<Code>bordered</Code>,
            <Code>solid</Code> or <Code>light</Code>.
          </div>
        }
      >
        <TabVariants />
      </VariantWrapper>

      <VariantWrapper
        heading="Disabled"
        code={code("disabled")}
        description={
          <div>
            Use the <Code>isDisabled</Code> prop to to disable a tab components.
          </div>
        }
      >
        <TabDisabled />
      </VariantWrapper>

      <VariantWrapper
        heading="Disabled Item"
        code={code("disabled-item")}
        description={
          <div>
            Use the <Code>isDisabled</Code> prop to to disable a tab.
          </div>
        }
      >
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

      <VariantWrapper
        heading="With Icons"
        code={code("with-icons")}
        // description={
        //   <div>
        //     Use the <Code>variant</Code> prop to change the visual style of the
        //     tabs. Values can be <Code>underlined</Code>,<Code>bordered</Code>,
        //     <Code>solid</Code> or <Code>light</Code>.
        //   </div>
        // }
      >
        <TabWithIcons />
      </VariantWrapper>

      <VariantWrapper heading="As Link" code={code("as")}>
        <TabAs />
      </VariantWrapper>
      <VariantWrapper heading="Outside" code={code("outside")}>
        <TabOutside />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tab;
