import {
  Accordion,
  AccordionItem,
  type AccordionProps,
  Text,
} from "@jamsr-ui/react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

export const AccordionVariants = () => {
  const variants: AccordionProps["variant"][] = [
    "light",
    "splitted",
    "outlined",
    "elevated",
  ];
  return (
    <div className="flex flex-col gap-8">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col gap-2">
          <Text as="p" variant="h6" className="capitalize">
            {variant}
          </Text>
          <Accordion variant={variant}>
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
      ))}
    </div>
  );
};
