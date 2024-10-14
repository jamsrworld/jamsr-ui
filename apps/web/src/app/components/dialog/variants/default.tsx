"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
} from "@jamsr-ui/react";
import { useState } from "react";
import { AccordionDefault } from "../../accordion/variants/default";

export const DialogDefault = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  return (
    <div>
      <Button onClick={handleClick}>Open Me</Button>
      <Dialog isOpen={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>Im am dialog Heading</DialogHeader>
          <DialogBody>
            I am dialog content!
            <AccordionDefault />
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};
