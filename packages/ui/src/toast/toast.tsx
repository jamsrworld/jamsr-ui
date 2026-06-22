"use client";

import { createContext, use, useMemo } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { toastStyles } from "./styles";
import { IconButton } from "../icon-button";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

export type ToastVariants = VariantProps<typeof toastStyles>;

const ToastContext = createContext<{
  styles: ReturnType<typeof toastStyles>;
} | null>(null);

const useToastContext = () => {
  const ctx = use(ToastContext);
  if (!ctx) {
    throw new Error("useToastContext must be used within a ToastRoot");
  }
  return ctx;
};

export const ToastRoot = (props: ToastRoot.Props) => {
  const { variant, className, ...restProps } = props;
  const styles = toastStyles({ variant });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <ToastContext value={value}>
      <ToastPrimitive.Root
        {...restProps}
        className={styles.root({ className: cn(className) })}
      />
    </ToastContext>
  );
};

export namespace ToastRoot {
  export interface Props extends ToastPrimitive.Root.Props, ToastVariants {}
}

export const ToastContent = (props: ToastPrimitive.Content.Props) => {
  const { styles } = useToastContext();
  return (
    <ToastPrimitive.Content
      {...props}
      className={styles.content({ className: cn(props.className) })}
    />
  );
};

export const ToastTitle = (props: ToastPrimitive.Title.Props) => {
  const { styles } = useToastContext();
  return (
    <ToastPrimitive.Title
      {...props}
      className={styles.title({ className: cn(props.className) })}
    />
  );
};

export const ToastDescription = (props: ToastPrimitive.Description.Props) => {
  const { styles } = useToastContext();
  return (
    <ToastPrimitive.Description
      {...props}
      className={styles.description({ className: cn(props.className) })}
    />
  );
};

export const ToastClose = (props: ToastPrimitive.Close.Props) => {
  const { styles } = useToastContext();
  return (
    <ToastPrimitive.Close
      {...props}
      className={styles.close({ className: cn(props.className) })}
      render={
        <IconButton label="Close" radius="full" size="sm" variant="light">
          <XIcon className={styles.icon()} />
        </IconButton>
      }
    />
  );
};

export const ToastViewport = (props: ToastPrimitive.Viewport.Props) => {
  return (
    <ToastPrimitive.Viewport
      {...props}
      className={toastStyles().viewport({ className: cn(props.className) })}
    />
  );
};

export const ToastPortal = (props: ToastPrimitive.Portal.Props) => {
  return <ToastPrimitive.Portal {...props} />;
};

export const ToastArrow = (props: ToastPrimitive.Arrow.Props) => {
  return <ToastPrimitive.Arrow {...props} />;
};

export const ToastProvider = (props: ToastPrimitive.Provider.Props) => {
  return <ToastPrimitive.Provider {...props} />;
};

const XIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 6 6 18" /> <path d="m6 6 12 12" />{" "}
    </svg>
  );
};
