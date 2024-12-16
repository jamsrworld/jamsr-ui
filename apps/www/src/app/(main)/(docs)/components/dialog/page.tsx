import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DialogBackdrop } from "./examples/backdrop";
import { DialogBordered } from "./examples/bordered";
import { DialogCustomCloseButton } from "./examples/custom-close-button";
import { DialogCustomize } from "./examples/customize";
import { DialogNonDismissible } from "./examples/non-dismissible";
import { DialogPopoverItems } from "./examples/popover-items";
import { DialogRadius } from "./examples/radius";
import { DialogScrollBehavior } from "./examples/scroll-behavior";
import { DialogUsage } from "./examples/usage";
import { DialogWithoutAnimation } from "./examples/without-animation";
import { DialogWithoutCloseButton } from "./examples/without-close-button";

const title = "Dialog";
const description =
  "A flexible and interactive component that presents content or actions in a modal window, allowing users to focus on critical information or decisions without distractions.";

const code = <T extends VariantTypes["dialog"][number]>(variant: T) =>
  readVariantCode("dialog", variant);

const Dialog = () => {
  return (
    <VariantPage heading={title} description={description} >
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DialogUsage />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <DialogRadius />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Animation"
        code={code("without-animation")}
      >
        <DialogWithoutAnimation />
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
