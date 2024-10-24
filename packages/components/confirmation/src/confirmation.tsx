"use client";

import { Button, type ButtonProps } from "@jamsr-ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
} from "@jamsr-ui/dialog";
import { Divider } from "@jamsr-ui/divider";
import { Typography } from "@jamsr-ui/typography";
import { useConfirmation } from "./use-confirmation";

export type ConfirmationProps = {
  cancelBtnProps?: ButtonProps;
  successBtnProps?: ButtonProps;
};

export const Confirmation = (pros: ConfirmationProps) => {
  const { cancelBtnProps, successBtnProps } = pros;
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
          <Typography as="p" variant="paragraph2" className="text-center">
            {message}
          </Typography>
        </DialogBody>
        <Divider />
        <div className="flex">
          <Button
            variant="light"
            onClick={handleClose}
            fullWidth
            className="shrink rounded-none rounded-bl-md"
            disableAnimation
            autoFocus
            {...cancelBtnProps}
          >
            Cancel
          </Button>
          <Divider orientation="vertical" />
          <Button
            fullWidth
            variant="light"
            onClick={handleConfirm}
            className="shrink rounded-none rounded-br-md font-bold"
            disableAnimation
            {...successBtnProps}
          >
            Ok
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
