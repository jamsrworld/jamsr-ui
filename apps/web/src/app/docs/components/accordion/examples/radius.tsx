import { Accordion } from "jamsrui/accordion";

export const AccordionRadius = () => {
  return (
    <Accordion
      variant="splitted"
      radius="full"
    >
      <Accordion.Item>
        <Accordion.Trigger>
          Accordion 1
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          Accordion 2
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          Accordion 3
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
