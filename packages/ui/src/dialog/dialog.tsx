"use client";

import { createContext, use, useMemo } from "react";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { IconButton } from "../icon-button";
import { CloseIcon } from "../icons";
import { dialogStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type DialogVariants = VariantProps<typeof dialogStyles>;

const DialogContext = createContext<{
  styles: ReturnType<typeof dialogStyles>;
  isNested?: boolean;
} | null>(null);

const useDialogContext = () => {
  const ctx = use(DialogContext);
  if (!ctx) {
    throw new Error("useDialogContext must be used within a DialogContext");
  }
  return ctx;
};

export const Dialog = (props: Dialog.Props) => {
  const {
    radius,
    fullWidth,
    backdrop,
    isBordered,
    scrollBehavior,
    isNested,
    ...restProps
  } = props;
  const styles = dialogStyles({
    backdrop,
    isBordered,
    scrollBehavior,
    fullWidth,
    radius,
  });
  const value = useMemo(() => ({ styles, isNested }), [isNested, styles]);
  return (
    <DialogContext value={value}>
      <DialogPrimitive.Root {...restProps}>
        {props.children}
      </DialogPrimitive.Root>
    </DialogContext>
  );
};

export namespace Dialog {
  export interface Props extends DialogPrimitive.Root.Props, DialogVariants {
    isNested?: boolean;
  }
}

export const DialogTrigger = (props: DialogPrimitive.Trigger.Props) => {
  return <DialogPrimitive.Trigger {...props} />;
};

export const DialogContent = (props: DialogContent.Props) => {
  const { styles, isNested } = useDialogContext();
  const { slotProps, className, ...restProps } = props;
  return (
    <DialogPrimitive.Portal
      {...slotProps?.portal}
      className={styles.portal({
        className: cn(slotProps?.portal?.className),
      })}
    >
      {!isNested && (
        <DialogPrimitive.Backdrop
          {...slotProps?.backdrop}
          className={styles.backdrop({
            className: cn(slotProps?.backdrop?.className),
          })}
        />
      )}
      <DialogPrimitive.Popup
        {...restProps}
        className={styles.popup({
          className: cn(className),
        })}
      />
    </DialogPrimitive.Portal>
  );
};
export namespace DialogContent {
  export interface Props extends DialogPrimitive.Popup.Props {
    slotProps?: {
      portal?: DialogPrimitive.Portal.Props;
      backdrop?: DialogPrimitive.Backdrop.Props;
    };
  }
}

export const DialogHeader = (props: DialogHeader.Props) => {
  const { styles } = useDialogContext();
  return (
    <div {...props} className={styles.header({ className: props.className })} />
  );
};
export namespace DialogHeader {
  export interface Props extends React.ComponentProps<"div"> {}
}

export const DialogBody = (props: DialogBody.Props) => {
  const { styles } = useDialogContext();
  return (
    <div {...props} className={styles.body({ className: props.className })} />
  );
};
export namespace DialogBody {
  export interface Props extends React.ComponentProps<"div"> {}
}

export const DialogFooter = (props: DialogFooter.Props) => {
  const { styles } = useDialogContext();
  return (
    <div {...props} className={styles.footer({ className: props.className })} />
  );
};
export namespace DialogFooter {
  export interface Props extends React.ComponentProps<"div"> {}
}

export const DialogClose = (props: Partial<IconButton.Props>) => {
  const { styles } = useDialogContext();
  return (
    <DialogPrimitive.Close
      render={
        <IconButton
          label="Close Dialog"
          radius="full"
          size="sm"
          {...props}
          className={styles.closeButton({ className: cn(props.className) })}
        >
          <CloseIcon className="size-4" />
        </IconButton>
      }
    />
  );
};

export const DialogCancel = (props: DialogPrimitive.Close.Props) => {
  return <DialogPrimitive.Close {...props} />;
};
