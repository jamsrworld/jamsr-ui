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
import { cn } from "@jamsr-ui/utils";
import { useConfirmation } from "./use-confirmation";

export type ConfirmationProps = {
  cancelBtnProps?: ButtonProps;
  successBtnProps?: ButtonProps;
  className?: string;
  classNames?: {
    content?: string;
    header?: string;
    body?: string;
    footer?: string;
    message?: string;
    cancelBtn?: string;
    successBtn?: string;
  };
};

export const Confirmation = (pros: ConfirmationProps) => {
  const { cancelBtnProps, successBtnProps, classNames, className } = pros;
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
      <DialogContent
        className={cn(
          "max-w-[280px] rounded-lg bg-background-secondary",
          classNames,
          classNames?.content,
        )}
      >
        <DialogHeader className={cn("text-center", classNames?.header)}>
          {title}
        </DialogHeader>
        <DialogBody>
          <Typography
            as="p"
            variant="paragraph2"
            className={cn("text-center", classNames?.message)}
          >
            {message}
          </Typography>
        </DialogBody>
        <Divider />
        <div className="flex">
          <Button
            variant="light"
            onClick={handleClose}
            fullWidth
            disableAnimation
            autoFocus
            {...cancelBtnProps}
            className={cn(
              "shrink rounded-none rounded-bl-md",
              cancelBtnProps?.className,
              classNames?.cancelBtn,
            )}
          >
            Cancel
          </Button>
          <Divider orientation="vertical" />
          <Button
            fullWidth
            variant="light"
            onClick={handleConfirm}
            disableAnimation
            {...successBtnProps}
            className={cn(
              "shrink rounded-none rounded-br-md font-bold",
              successBtnProps?.className,
              classNames?.successBtn,
            )}
          >
            Ok
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
