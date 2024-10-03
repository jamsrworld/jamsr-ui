import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { DefaultAccordion } from "./variants/default";
import { EndContentAccordion } from "./variants/end-content";
import { EndContentOutsideAccordion } from "./variants/end-content-outside";
import { StartContentAccordion } from "./variants/start-content";
import { StartContentOutsideAccordion } from "./variants/start-content-outside";
import { SubtitleAccordion } from "./variants/subtitle";

export const metadata: Metadata = {
  title: "Accordion",
};

const Accordion = () => {
  return (
    <VariantPage heading="Accordion">
      <VariantWrapper heading="Default">
        <DefaultAccordion />
      </VariantWrapper>
      <VariantWrapper heading="With Subtitle">
        <SubtitleAccordion />
      </VariantWrapper>
      <VariantWrapper heading="With Start Content">
        <StartContentAccordion />
      </VariantWrapper>
      <VariantWrapper heading="With End Content">
        <EndContentAccordion />
      </VariantWrapper>
      <VariantWrapper
        heading="With Start Content Outside"
        description="Use case of content outside the trigger is that you can add events on the outside content"
      >
        <StartContentOutsideAccordion />
      </VariantWrapper>
      <VariantWrapper
        heading="With End Content Outside"
        description="Use case of content outside the trigger is that you can add events on the outside content"
      >
        <EndContentOutsideAccordion />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Accordion;
