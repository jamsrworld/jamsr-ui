import { Code } from "@/components/code";
import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { IconButtonColors } from "./examples/colors";
import { IconButtonDisabled } from "./examples/disabled";
import { IconButtonLoading } from "./examples/loading";
import { IconButtonRadius } from "./examples/radius";
import { IconButtonSizes } from "./examples/sizes";
import { IconButtonUsage } from "./examples/usage";
import { IconButtonVariants } from "./examples/variants";
import { IconButtonVariantsColors } from "./examples/variants-colors";

const title = "Icon Button";

export const metadata: Metadata = {
  title,
};

const code = <T extends VariantTypes["button"][number]>(variant: T) =>
  readVariantCode("button", variant);

const IconButton = () => {
  return (
    <VariantPage heading={title}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <IconButtonUsage />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <IconButtonRadius />
      </VariantWrapper>
      <VariantWrapper
        heading="Variants"
        code={code("variants")}
        description={
          <div>
            Use the <Code>variant</Code> prop to change the visual style of the
            Button.
          </div>
        }
      >
        <IconButtonVariants />
      </VariantWrapper>
      <VariantWrapper
        heading="Colors"
        code={code("colors")}
        description={
          <div>
            Use the <Code>color</Code> prop to change the color of the Button.
          </div>
        }
      >
        <IconButtonColors />
      </VariantWrapper>

      <VariantWrapper
        heading="Sizes"
        code={code("sizes")}
        description={
          <div>
            Use the <Code>size</Code> prop to change the size of the Button.
          </div>
        }
      >
        <IconButtonSizes />
      </VariantWrapper>
      <VariantWrapper
        heading="Disabled"
        code={code("disabled")}
        description={
          <div>
            Use the <Code>isDisabled</Code> prop to disabled the Button.
          </div>
        }
      >
        <IconButtonDisabled />
      </VariantWrapper>
      <VariantWrapper
        heading="Loading"
        code={code("loading")}
        description={
          <div>
            Use the <Code>isLoading</Code> prop to display a loading indicator
            on the Button.
          </div>
        }
      >
        <IconButtonLoading />
      </VariantWrapper>
      <VariantWrapper
        heading="Variants & Colors"
        code={code("variants-colors")}
      >
        <IconButtonVariantsColors />
      </VariantWrapper>
    </VariantPage>
  );
};
export default IconButton;
