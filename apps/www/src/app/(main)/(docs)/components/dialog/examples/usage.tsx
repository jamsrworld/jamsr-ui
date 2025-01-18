"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Repeater,
  Text,
  Tooltip,
  useDialogState,
} from "@jamsr-ui/react";

const InnerCloseButton = () => {
  const { onClose } = useDialogState();
  return <Button onClick={onClose}>Close Me</Button>;
};

export const DialogUsage = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip title="Hello i am tooltip">
          <Button>Click Me!</Button>
        </Tooltip>
      </DialogTrigger>
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
          <InnerCloseButton />
        </DialogBody>
        <DialogFooter>
          <DialogTrigger action="close">
            <Button variant="light" color="secondary">
              Cancel
            </Button>
          </DialogTrigger>
          <DialogTrigger action="close">
            <Button color="primary">Submit</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
