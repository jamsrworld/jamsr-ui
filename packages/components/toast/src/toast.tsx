"use client";

import { cn, type SlotsToClasses } from "@jamsr-ui/utils";
import toast, { Toaster, type ToasterProps } from "react-hot-toast";
import { type ToastSlots, toastStyle, type ToastVariantProps } from "./styles";

export type ToastProps = ToasterProps &
  ToastVariantProps & {
    classNames?: SlotsToClasses<ToastSlots>;
  };

const ToastProvider = (props: ToastProps) => {
  const { toastOptions, radius, classNames, ...restProps } = props;
  const styles = toastStyle({
    radius,
  });
  return (
    <Toaster
      position="bottom-center"
      {...restProps}
      toastOptions={{
        duration: 2_000,
        ...toastOptions,
        className: styles.toast({
          className: cn(toastOptions?.className, classNames?.toast),
        }),
      }}
    />
  );
};

export { toast, ToastProvider };
