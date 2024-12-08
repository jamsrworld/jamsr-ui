"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  type AccordionProps,
} from "@jamsr-ui/react";
import { useState } from "react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionRadius = () => {
  const radii: AccordionProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  const [radius, setRadius] = useState<AccordionProps["radius"]>();
  return (
    <div>
      <div className="mb-4">
        {radii.map((radius) => (
          <Button
            key={radius}
            onClick={() => setRadius(radius)}
            variant="light"
          >
            {radius}
          </Button>
        ))}
      </div>
      <Accordion radius={radius}>
        <AccordionItem aria-label="Accordion 1" heading="Accordion 1">
          {content}
        </AccordionItem>
        <AccordionItem aria-label="Accordion 2" heading="Accordion 2">
          {content}
        </AccordionItem>
        <AccordionItem aria-label="Accordion 3" heading="Accordion 3">
          {content}
        </AccordionItem>
        <AccordionItem aria-label="Accordion 4" heading="Accordion 4">
          {content}
        </AccordionItem>
      </Accordion>
    </div>
  );
};
