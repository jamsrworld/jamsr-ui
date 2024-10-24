"use client";

import toast, { Toaster, type ToasterProps } from "react-hot-toast";

const Toast = (props: ToasterProps) => {
  const { toastOptions, ...restProps } = props;
  return (
    <Toaster
      position="bottom-center"
      {...restProps}
      toastOptions={{
        className:
          "!bg-black dark:!bg-background border-none !radius-none dark:!text-foreground  !text-white",
        duration: 2_000,
        ...toastOptions,
      }}
    />
  );
};

export { Toast, toast };
