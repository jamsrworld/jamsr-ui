"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  type DialogProps,
  Repeater,
  Typography,
} from "@jamsr-ui/react";

const DialogItem = (
  props: Partial<DialogProps> & {
    buttonText?: string;
  },
) => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const { buttonText, ...restProps } = props;
  return (
    <div>
      <Button onClick={onOpen}>{buttonText}</Button>
      <Dialog isOpen={isOpen} onOpenChange={setIsOpen} {...restProps}>
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Typography as="h3">Im am dialog Body</Typography>
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

export const DialogRadius = () => {
  const radii: NonNullable<DialogProps["radius"]>[] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <DialogItem
          buttonText={`radius ${radius}`}
          key={radius}
          radius={radius}
        />
      ))}
    </div>
  );
};
