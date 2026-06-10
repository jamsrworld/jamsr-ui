"use client";

import { createContext, use, useMemo } from "react";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

import { Button } from "../button";
import { alertDialogStyles } from "./styles";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type AlertDialogVariants = VariantProps<typeof alertDialogStyles>;

const AlertDialogContext = createContext<{
  styles: ReturnType<typeof alertDialogStyles>;
} | null>(null);

const useAlertDialogContext = () => {
  const ctx = use(AlertDialogContext);
  if (!ctx) {
    throw new Error("useAlertDialogContext must be used within an AlertDialog");
  }
  return ctx;
};

export const AlertDialog = (props: AlertDialog.Props) => {
  const { radius, backdrop, size, ...restProps } = props;
  const styles = alertDialogStyles({ radius, backdrop, size });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AlertDialogContext value={value}>
      <AlertDialogPrimitive.Root {...restProps} />
    </AlertDialogContext>
  );
};

export namespace AlertDialog {
  export interface Props
    extends AlertDialogPrimitive.Root.Props, AlertDialogVariants {}
}

export const AlertDialogTrigger = (
  props: AlertDialogPrimitive.Trigger.Props,
) => {
  return <AlertDialogPrimitive.Trigger {...props} />;
};

export const AlertDialogContent = (props: AlertDialogContent.Props) => {
  const { styles } = useAlertDialogContext();
  const { slotProps, className, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Portal {...slotProps?.portal}>
      <AlertDialogPrimitive.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: cn(slotProps?.backdrop?.className),
        })}
      />
      <AlertDialogPrimitive.Popup
        {...restProps}
        className={styles.popup({
          className: cn(className),
        })}
      />
    </AlertDialogPrimitive.Portal>
  );
};
export namespace AlertDialogContent {
  export interface Props extends AlertDialogPrimitive.Popup.Props {
    slotProps?: {
      portal?: AlertDialogPrimitive.Portal.Props;
      backdrop?: AlertDialogPrimitive.Backdrop.Props;
    };
  }
}

export const AlertDialogFooter = (props: AlertDialogFooter.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <div {...props} className={styles.footer({ className: props.className })} />
  );
};
export namespace AlertDialogFooter {
  export interface Props extends React.ComponentProps<"div"> {}
}

export const AlertDialogTitle = (props: AlertDialogPrimitive.Title.Props) => {
  const { styles } = useAlertDialogContext();
  const { className, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Title
      {...restProps}
      className={styles.title({ className: cn(className) })}
    />
  );
};

export const AlertDialogDescription = (
  props: AlertDialogPrimitive.Description.Props,
) => {
  const { styles } = useAlertDialogContext();
  const { className, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Description
      {...restProps}
      className={styles.description({ className: cn(className) })}
    />
  );
};

export const AlertDialogCancel = (props: AlertDialogCancel.Props) => {
  const { styles } = useAlertDialogContext();
  const { className, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Close
      render={
        <Button
          color="default"
          variant="solid"
          {...restProps}
          className={styles.cancel({ className: cn(className) })}
        />
      }
    />
  );
};

export namespace AlertDialogCancel {
  export interface Props extends Button.Props {}
}

export const AlertDialogAction = (props: AlertDialogAction.Props) => {
  const { styles } = useAlertDialogContext();
  return (
    <Button
      color="danger"
      variant="solid"
      {...props}
      className={styles.action({ className: cn(props.className) })}
    />
  );
};
export namespace AlertDialogAction {
  export interface Props extends Button.Props {}
}
