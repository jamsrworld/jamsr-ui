"use client";

import toast, { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className:
          "!bg-black dark:!bg-background border-none !radius-none dark:!text-foreground  !text-white",
        duration: 2_00043,
      }}
    />
  );
};

export { Toast, toast };
