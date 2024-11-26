import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DialogBackdrop } from "./variants/backdrop";
import { DialogBordered } from "./variants/bordered";
import { DialogCustomCloseButton } from "./variants/custom-close-button";
import { DialogCustomize } from "./variants/customize";
import { DialogNonDismissible } from "./variants/non-dismissible";
import { DialogPopoverItems } from "./variants/popover-items";
import { DialogScrollBehavior } from "./variants/scroll-behavior";
import { DialogUsage } from "./variants/usage";
import { DialogWithoutCloseButton } from "./variants/without-close-button";

export const metadata: Metadata = {
  title: "Dialog",
};

const code = <T extends VariantTypes["dialog"][number]>(variant: T) =>
  readVariantCode("dialog", variant);

const Dialog = () => {
  return (
    <VariantPage heading="Dialog">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DialogUsage />
      </VariantWrapper>
      <VariantWrapper heading="Popover Items" code={code("popover-items")}>
        <DialogPopoverItems />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Close Button"
        code={code("without-close-button")}
      >
        <DialogWithoutCloseButton />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <DialogBordered />
      </VariantWrapper>
      <VariantWrapper heading="Backdrop" code={code("backdrop")}>
        <DialogBackdrop />
      </VariantWrapper>
      <VariantWrapper heading="Scroll Behavior" code={code("scroll-behavior")}>
        <DialogScrollBehavior />
      </VariantWrapper>
      <VariantWrapper heading="Non Dismissible" code={code("non-dismissible")}>
        <DialogNonDismissible />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Close Button"
        code={code("custom-close-button")}
      >
        <DialogCustomCloseButton />
      </VariantWrapper>
      <VariantWrapper heading="Customize" code={code("customize")}>
        <DialogCustomize />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Dialog;
