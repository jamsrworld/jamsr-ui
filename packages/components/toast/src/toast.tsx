"use client";

import { cn } from "@jamsr-ui/utils";
import toast, { Toaster, type ToasterProps } from "react-hot-toast";

const ToastProvider = (props: ToasterProps) => {
  const { toastOptions, ...restProps } = props;
  return (
    <Toaster
      position="bottom-center"
      {...restProps}
      toastOptions={{
        duration: 2_000,
        ...toastOptions,
        className: cn(
          "!max-w-[unset] !rounded-none border-none !bg-content1 !text-foreground !shadow-lg",
          toastOptions?.className,
        ),
      }}
    />
  );
};

export { toast, ToastProvider };
