"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@jamsr-ui/react";

export const DialogWithoutCloseButton = () => {
  const { isOpen, onClose, onOpen, setIsOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Me</Button>
      <Dialog closeButton={null} isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Typography as="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              molestias sequi? Aperiam fugit dignissimos doloribus doloremque
              ullam commodi libero voluptatum accusantium ut est, explicabo
              eveniet repellat eius ad velit. Recusandae?
            </Typography>
            <Typography as="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              molestias sequi? Aperiam fugit dignissimos doloribus doloremque
              ullam commodi libero voluptatum accusantium ut est, explicabo
              eveniet repellat eius ad velit. Recusandae?
            </Typography>
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
