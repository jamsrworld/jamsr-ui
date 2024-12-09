"use client";

import { Button, type ButtonProps } from "@jamsr-ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
} from "@jamsr-ui/dialog";
import { Divider } from "@jamsr-ui/divider";
import { useUIStyle } from "@jamsr-ui/styles";
import { Typography } from "@jamsr-ui/typography";
import { cn, deepMergeProps } from "@jamsr-ui/utils";
import { useConfirmation } from "./use-confirmation";

export type ConfirmationProps = {
  cancelBtnProps?: ButtonProps;
  confirmBtnProps?: ButtonProps;
  className?: string;
  classNames?: {
    content?: string;
    header?: string;
    body?: string;
    footer?: string;
    message?: string;
    cancelBtn?: string;
    confirmBtn?: string;
  };
  labels?: {
    cancel?: string;
    confirm?: string;
  };
};

export const Confirmation = ($props: ConfirmationProps) => {
  const { confirmation:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const { isOpen, onClose, options: confirmation } = useConfirmation();
  if (!confirmation) return null;
  const { message, onCancel, onConfirm, title, ...restProps } = confirmation;
  const props2 = deepMergeProps(props, restProps);

  const {
    cancelBtnProps,
    confirmBtnProps,
    classNames,
    className,
    labels = { cancel: "No, Cancel", confirm: "Yes, Confirm" },
  } = props2;

  const handleClose = () => {
    onCancel?.();
    onClose();
  };
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onClose}
      isAnimationDisabled
      closeButton={null}
    >
      <DialogContent
        className={cn(
          "max-w-[280px] rounded-lg",
          className,
          classNames?.content,
        )}
      >
        <DialogHeader className={cn("pb-0 text-center", classNames?.header)}>
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
            {labels.cancel}
          </Button>
          <Divider orientation="vertical" />
          <Button
            fullWidth
            variant="light"
            onClick={handleConfirm}
            disableAnimation
            {...confirmBtnProps}
            className={cn(
              "shrink rounded-none rounded-br-md font-bold",
              confirmBtnProps?.className,
              classNames?.confirmBtn,
            )}
          >
            {labels.confirm}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
