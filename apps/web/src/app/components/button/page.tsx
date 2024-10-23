import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
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

const Button = () => {
  return (
    <VariantPage heading="Button">
      <VariantWrapper heading="Default">
        <ButtonDefault />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <ButtonSizes />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <ButtonDisabled />
      </VariantWrapper>
      <VariantWrapper heading="WithIcons">
        <ButtonWithIcons />
      </VariantWrapper>
      <VariantWrapper heading="IconButton">
        <ButtonIconButton />
      </VariantWrapper>
      <VariantWrapper heading="Loading">
        <ButtonLoading />
      </VariantWrapper>
      <VariantWrapper heading="Variants">
        <ButtonVariants />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Button;
