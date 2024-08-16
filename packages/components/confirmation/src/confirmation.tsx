"use client";

import { Button } from "@jamsr-ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
} from "@jamsr-ui/dialog";
import { Divider } from "@jamsr-ui/divider";
import { useConfirmation } from "./use-confirmation";

export const Confirmation = () => {
  const { isOpen, onClose, options: confirmation } = useConfirmation();
  if (!confirmation) return null;
  const { message, onCancel, onConfirm, title } = confirmation;
  const handleClose = () => {
    onCancel?.();
    onClose();
  };
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <Dialog isOpen={isOpen} onOpenChange={onClose} hideCloseButton>
      <DialogContent className="max-w-[280px] rounded-lg bg-background-secondary">
        <DialogHeader className="text-center">{title}</DialogHeader>
        <DialogBody>
          <p className="text-center text-foreground-secondary">{message}</p>
        </DialogBody>
        <Divider />
        <div className="flex">
          <Button
            variant="link"
            onClick={handleClose}
            fullWidth
            className="rounded-none rounded-bl-md hover:bg-background-secondary"
            disableAnimation
            autoFocus
          >
            Cancel
          </Button>
          <Divider orientation="vertical" />
          <Button
            fullWidth
            variant="link"
            onClick={handleConfirm}
            className="rounded-none rounded-br-md font-bold hover:bg-background-secondary"
            disableAnimation
          >
            Ok
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
