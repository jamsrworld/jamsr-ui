"use client";

import { Accordion, AccordionItem, Button } from "@jamsr-ui/react";

const page = () => {
  return (
    <div className="grid h-dvh place-content-center bg-black">
      <Accordion>
        <AccordionItem>HIii</AccordionItem>
        <AccordionItem>HIii2</AccordionItem>
      </Accordion>
      <Button className="rounded-lg border border-gray-500 p-2 text-purple-500">Hello</Button>
      <h1 className="text-3xl font-bold text-red-700 underline">Hello world!</h1>
    </div>
  );
};

export default page;
