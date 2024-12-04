"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Repeater,
  Typography,
} from "@jamsr-ui/react";

export const DialogCustomize = () => {
  const { isOpen, onClose, onOpen, setIsOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Dialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        classNames={{
          header: "bg-red-500",
          body: "bg-content2",
          footer: "bg-content3",
          closeButton: "bg-red-900",
          content: "border-2 border-red-950",
          backdrop: "bg-gray-900/20",
        }}
        slotProps={{
          closeButton: {
            isRounded: false,
          },
        }}
      >
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Repeater repeat={2}>
              <Typography as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos corrupti est quos asperiores libero maiores amet non
                obcaecati odio excepturi illo recusandae tenetur, qui earum
                dolorem minus, quibusdam optio? Cum.
              </Typography>
            </Repeater>
          </DialogBody>
          <DialogFooter>
            <Button variant="light" onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
