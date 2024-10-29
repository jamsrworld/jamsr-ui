import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { AccordionCustomIcon } from "./variants/custom-icon";
import { AccordionDefault } from "./variants/default";
import { AccordionDisabled } from "./variants/disabled";
import { AccordionEndContent } from "./variants/end-content";
import { AccordionEndContentOutside } from "./variants/end-content-outside";
import { AccordionMultipleSelection } from "./variants/multiple-selection";
import { AccordionStartContent } from "./variants/start-content";
import { AccordionStartContentOutside } from "./variants/start-content-outside";
import { AccordionSubheading } from "./variants/subheading";

const title = "Accordion";
const description =
  "An accordion is a UI component that organizes content into collapsible sections.";

export const metadata: Metadata = {
  title,
  description,
};

const Accordion = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Default">
        <AccordionDefault />
      </VariantWrapper>
      <VariantWrapper
        heading="Multiple Selection"
        description={
          <div>
            Use the{" "}
            <code className="bg-content2 p-1 mx-1 rounded-lg text-sm">
              isMultiple
            </code>{" "}
            prop to allow multiple items to be expanded at once.
          </div>
        }
      >
        <AccordionMultipleSelection />
      </VariantWrapper>
      <VariantWrapper
        heading="Disabled Items"
        description={
          <div>
            Use the{" "}
            <code className="bg-content2 p-1 mx-1 rounded-lg text-sm">
              isDisabled
            </code>{" "}
            prop to disable an accordion item to prevent it from being expanded
            or collapsed.
          </div>
        }
      >
        <AccordionDisabled />
      </VariantWrapper>
      <VariantWrapper
        heading="With Subheading"
        description={
          <div>
            Use the{" "}
            <code className="bg-content2 p-1 mx-1 rounded-lg text-sm">
              subheading
            </code>{" "}
            prop to add subheading.
          </div>
        }
      >
        <AccordionSubheading />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content"
        description={
          <div>
            Use the{" "}
            <code className="bg-content2 p-1 mx-1 rounded-lg text-sm">
              startContent
            </code>{" "}
            prop if you want to display some content before the accordion items.
          </div>
        }
      >
        <AccordionStartContent />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content"
        description={
          <div>
            Use the{" "}
            <code className="bg-content2 p-1 mx-1 rounded-lg text-sm">
              endContent
            </code>{" "}
            prop if you want to display some content after the accordion items.
          </div>
        }
      >
        <AccordionEndContent />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content Outside"
        description="Use case of content outside the trigger is that you can add events on the outside content"
      >
        <AccordionStartContentOutside />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content Outside"
        description="Use case of content outside the trigger is that you can add events on the outside content"
      >
        <AccordionEndContentOutside />
      </VariantWrapper>
      <VariantWrapper
        description="Pass indicator prop to change the default icon"
        heading="Custom Icon"
      >
        <AccordionCustomIcon />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Accordion;
