import { type Meta, type StoryObj } from "@storybook/react";
import { Accordion, type AccordionProps } from "../src/accordion";
import { AccordionItem } from "../src/accordion-item";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const defaultContent2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const defaultContent3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const DefaultTemplate = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem title="Accordion 1">{defaultContent}</AccordionItem>
      <AccordionItem title="Accordion 2">{defaultContent2}</AccordionItem>
      <AccordionItem
        isDisabled
        title="Accordion 3"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};

export const Default: Story = {
  render: DefaultTemplate,
};

const WithSubtitleTemplate = (arg: AccordionProps) => {
  return (
    <Accordion {...arg}>
      <AccordionItem
        title="Accordion 1"
        subtitle="Press to expand item 1"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        title="Accordion 2"
        subtitle="Press to expand item 2"
      >
        {defaultContent2}
      </AccordionItem>
      <AccordionItem
        isDisabled
        title="Accordion 3"
        subtitle="Disabled Accordion Item"
      >
        {defaultContent3}
      </AccordionItem>
    </Accordion>
  );
};

export const WithSubtitle: Story = {
  render: WithSubtitleTemplate,
};
