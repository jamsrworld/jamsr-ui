"use client";

import { Accordion } from "ui/accordion";

export const AccordionWithoutIcon = (props: Accordion.Props) => {
  return (
    <Accordion
      {...props}
      className="w-full"
    >
      <Accordion.Item>
        <Accordion.Trigger>Accordion 1</Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Accordion 2</Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Accordion 3</Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
