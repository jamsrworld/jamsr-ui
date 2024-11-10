import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { ButtonDefault } from "./variants/default";
import { ButtonDisabled } from "./variants/disabled";
import { ButtonIconButton } from "./variants/icon-button";
import { ButtonLoading } from "./variants/loading";
import { ButtonSizes } from "./variants/sizes";
import { ButtonVariants } from "./variants/variants";
import { ButtonWithIcons } from "./variants/with-icons";

export const metadata: Metadata = {
  title: "Button",
};

const code = <T extends VariantTypes["button"][number]>(variant: T) =>
  readVariantCode("button", variant);

const Button = () => {
  return (
    <VariantPage heading="Button">
      <VariantWrapper heading="Default" code={code("default")}>
        <ButtonDefault />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <ButtonSizes />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <ButtonDisabled />
      </VariantWrapper>
      <VariantWrapper heading="WithIcons" code={code("with-icons")}>
        <ButtonWithIcons />
      </VariantWrapper>
      <VariantWrapper heading="IconButton" code={code("icon-button")}>
        <ButtonIconButton />
      </VariantWrapper>
      <VariantWrapper heading="Loading" code={code("loading")}>
        <ButtonLoading />
      </VariantWrapper>
      <VariantWrapper heading="Variants" code={code("variants")}>
        <ButtonVariants />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Button;
