import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { PopoverControlled } from "./examples/controlled";
import { PopoverPlacement } from "./examples/placement";
import { PopoverTriggerOnHover } from "./examples/trigger-on";
import { PopoverUsage } from "./examples/usage";
import { PopoverWithArrow } from "./examples/with-arrow";
import { PopoverWithoutScroll } from "./examples/without-lock-scroll";
import { PopoverRadius } from "./examples/radius";

const title = "Popover";
const description =
  "Popover is a non-modal dialog that floats around its disclosure. It's commonly used for displaying additional rich content on top of something.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["popover"][number]>(variant: T) =>
  readVariantCode("popover", variant);

const Popover = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <PopoverUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <PopoverWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Trigger On Hover" code={code("trigger-on")}>
        <PopoverTriggerOnHover />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <PopoverRadius />
      </VariantWrapper>
      <VariantWrapper heading="Placement" code={code("placement")}>
        <PopoverPlacement />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <PopoverControlled />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Lock Scroll"
        code={code("without-lock-scroll")}
      >
        <PopoverWithoutScroll />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Popover;
