import { type Meta, type StoryObj } from "@storybook/react";
import { Accordion, type AccordionProps } from "../src/accordion";
import { DefaultAccordion } from "./stories/default";
import { EndContentAccordion } from "./stories/end-content";
import { EndContentOutsideAccordion } from "./stories/end-content-outside";
import { StartContentAccordion } from "./stories/start-content";
import { StartContentOutsideAccordion } from "./stories/start-content-outside";
import { SubtitleAccordion } from "./stories/subtitle";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};
export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  render: DefaultAccordion,
};

export const WithSubtitle: Story = {
  render: SubtitleAccordion,
};

export const StartContent: Story = {
  render: StartContentAccordion,
};

export const EndContent: Story = {
  render: EndContentAccordion,
};

export const StartContentOutside: Story = {
  render: StartContentOutsideAccordion,
};

export const EndContentOutside: Story = {
  render: EndContentOutsideAccordion,
};
