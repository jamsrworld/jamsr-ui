import { Code } from "@/components/code";
import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { ButtonColors } from "./examples/colors";
import { ButtonDisabled } from "./examples/disabled";
import { ButtonIconButton } from "./examples/icon-button";
import { ButtonLoading } from "./examples/loading";
import { ButtonSizes } from "./examples/sizes";
import { ButtonUsage } from "./examples/usage";
import { ButtonVariants } from "./examples/variants";
import { ButtonVariantsColors } from "./examples/variants-colors";
import { ButtonWithIcons } from "./examples/with-icons";

const title = "Button";
const description =
  "Buttons allow users to take actions, and make choices, with a single tap.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["button"][number]>(variant: T) =>
  readVariantCode("button", variant);

const Button = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <ButtonUsage />
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
        <ButtonVariants />
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
        <ButtonColors />
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
        <ButtonSizes />
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
        <ButtonDisabled />
      </VariantWrapper>
      <VariantWrapper
        heading="With Icons and Label"
        code={code("with-icons")}
        description={
          <div>
            You can add icons to the <Code>Button</Code> by passing the{" "}
            <Code>startContent</Code> or <Code>endContent</Code> props.
          </div>
        }
      >
        <ButtonWithIcons />
      </VariantWrapper>
      <VariantWrapper
        heading="Icon Button"
        code={code("icon-button")}
        description={
          <div>
            Use the <Code>isIconOnly</Code> prop to display an icon without text
            on the Button.
          </div>
        }
      >
        <ButtonIconButton />
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
        <ButtonLoading />
      </VariantWrapper>
      <VariantWrapper
        heading="Variants & Colors"
        code={code("variants-colors")}
      >
        <ButtonVariantsColors />
      </VariantWrapper>

      {/* <VariantWrapper
        heading="Button Group"
        code={code("loading")}
        description={
          <div>
            Use the <Code>group</Code> component to group the Button.
          </div>
        }
      >
        <ButtonLoading />
      </VariantWrapper> */}
    </VariantPage>
  );
};
export default Button;
