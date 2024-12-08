import { Code } from "@/components/code";
import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { AccordionCustomIcon } from "./examples/custom-icon";
import { AccordionDisabled } from "./examples/disabled";
import { AccordionEndContent } from "./examples/end-content";
import { AccordionEndContentOutside } from "./examples/end-content-outside";
import { AccordionMultipleSelection } from "./examples/multiple-selection";
import { AccordionRadius } from "./examples/radius";
import { AccordionStartContent } from "./examples/start-content";
import { AccordionStartContentOutside } from "./examples/start-content-outside";
import { AccordionSubheading } from "./examples/subheading";
import { AccordionUsage } from "./examples/usage";
import { AccordionVariants } from "./examples/variants";
import { AccordionWithoutIcon } from "./examples/without-icon";

const title = "Accordion";
const description =
  "An accordion is a UI component that organizes content into collapsible sections.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["accordion"][number]>(variant: T) =>
  readVariantCode("accordion", variant);

const Accordion = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <AccordionUsage />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <AccordionRadius />
      </VariantWrapper>
      <VariantWrapper bg="secondary" heading="Variants" code={code("variants")}>
        <AccordionVariants />
      </VariantWrapper>
      <VariantWrapper
        heading="Disabled Items"
        description={
          <div>
            Use the <Code>isDisabled</Code> prop to disable an accordion item to
            prevent it from being expanded or collapsed.
          </div>
        }
        code={code("disabled")}
      >
        <AccordionDisabled />
      </VariantWrapper>
      <VariantWrapper
        description={
          <div>
            Use <Code>indicator</Code> prop to change the default icon. You can
            use it to customize the open/close indicator.
          </div>
        }
        heading="Custom Icon"
        code={code("custom-icon")}
      >
        <AccordionCustomIcon />
      </VariantWrapper>
      <VariantWrapper
        description={
          <div>
            Use <Code>indicator={`{null}`}</Code> prop to remove the default
            icon.
          </div>
        }
        heading="Without Icon"
        code={code("without-icon")}
      >
        <AccordionWithoutIcon />
      </VariantWrapper>
      <VariantWrapper
        heading="Multiple Selection"
        description={
          <div>
            Use the <Code>isMultiple</Code> prop to allow multiple items to be
            expanded at once.
          </div>
        }
        code={code("multiple-selection")}
      >
        <AccordionMultipleSelection />
      </VariantWrapper>

      <VariantWrapper
        heading="With Subheading"
        description={
          <div>
            Use the <Code>subheading</Code> prop to add subheading.
          </div>
        }
        code={code("subheading")}
      >
        <AccordionSubheading />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content"
        description={
          <div>
            Use the <Code>startContent</Code> prop if you want to display some
            content before the accordion items.
          </div>
        }
        code={code("start-content")}
      >
        <AccordionStartContent />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content"
        description={
          <div>
            Use the <Code>endContent</Code> prop if you want to display some
            content after the accordion items.
          </div>
        }
        code={code("end-content")}
      >
        <AccordionEndContent />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content Outside"
        description={
          <div>
            Use <Code>startContentPlacement</Code> prop to change the placement.
            Use case of content outside the trigger is that you can add events
            on the outside content
          </div>
        }
        code={code("start-content-outside")}
      >
        <AccordionStartContentOutside />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content Outside"
        description={
          <div>
            Use <Code>endContentPlacement</Code> prop to change the placement.
            Use case of content outside the trigger is that you can add events
            on the outside content
          </div>
        }
        code={code("end-content-outside")}
      >
        <AccordionEndContentOutside />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Accordion;
