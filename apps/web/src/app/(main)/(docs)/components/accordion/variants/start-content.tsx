import { Accordion, AccordionItem, Avatar, type AvatarProps } from "@jamsr-ui/react";
import { useId } from "react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

const AvatarDefault = (props: Partial<AvatarProps>) => {
  const id = useId();
  return (
    <Avatar
      alt="image"
      className="flex"
      src={`https://i.pravatar.cc/300?u=${id}`}
      width={100}
      height={100}
      {...props}
    />
  );
};

export const AccordionStartContent = () => {
  return (
    <Accordion>
      <AccordionItem
        heading="Accordion 1"
        subheading="Press to expand item 1"
        startContent={<AvatarDefault />}
      >
        {content}
      </AccordionItem>
      <AccordionItem
        heading="Accordion 2"
        subheading="Press to expand item 2"
        startContent={<AvatarDefault />}
      >
        {content}
      </AccordionItem>
      <AccordionItem
        isDisabled
        heading="Accordion 3"
        subheading="Disabled Accordion Item"
        startContent={<AvatarDefault />}
      >
        {content}
      </AccordionItem>
    </Accordion>
  );
};
