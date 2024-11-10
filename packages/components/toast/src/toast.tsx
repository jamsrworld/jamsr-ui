"use client";

import toast, { Toaster, type ToasterProps } from "react-hot-toast";

const ToastProvider = (props: ToasterProps) => {
  const { toastOptions, ...restProps } = props;
  return (
    <Toaster
      position="bottom-center"
      {...restProps}
      toastOptions={{
        className:
          "!bg-content1 border-none !radius-none !shadow-lg !text-foreground",
        duration: 2_000,
        ...toastOptions,
      }}
    />
  );
};

export { ToastProvider, toast };
