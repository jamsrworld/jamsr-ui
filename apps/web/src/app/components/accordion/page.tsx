import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { AccordionCustomIcon } from "./variants/custom-icon";
import { AccordionDefault } from "./variants/default";
import { AccordionEndContent } from "./variants/end-content";
import { AccordionEndContentOutside } from "./variants/end-content-outside";
import { AccordionStartContent } from "./variants/start-content";
import { AccordionStartContentOutside } from "./variants/start-content-outside";
import { AccordionSubtitle } from "./variants/subtitle";

export const metadata: Metadata = {
  title: "Accordion",
};

const Accordion = () => {
  return (
    <VariantPage heading="Accordion">
      <VariantWrapper heading="Default">
        <AccordionDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Subtitle">
        <AccordionSubtitle />
      </VariantWrapper>
      <VariantWrapper heading="With Start Content">
        <AccordionStartContent />
      </VariantWrapper>
      <VariantWrapper heading="With End Content">
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
      <VariantWrapper heading="Custom Icon">
        <AccordionCustomIcon />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Accordion;
