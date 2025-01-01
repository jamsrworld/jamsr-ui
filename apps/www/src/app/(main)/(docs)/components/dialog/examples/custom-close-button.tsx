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
  Text,
} from "@jamsr-ui/react";

export const DialogCustomCloseButton = () => {
  const { isOpen, onClose, onOpen, setIsOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Click Me!</Button>
      <Dialog
        isBordered
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        closeButton={
          <Button
            className="absolute right-2 top-2"
            variant="solid"
            color="danger"
            onClick={onClose}
          >
            Close
          </Button>
        }
      >
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Repeater repeat={2}>
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos corrupti est quos asperiores libero maiores amet non
                obcaecati odio excepturi illo recusandae tenetur, qui earum
                dolorem minus, quibusdam optio? Cum.
              </Text>
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
