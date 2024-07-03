"use client";

import toast, { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: "!bg-background border !border-divider !text-foreground",
        duration: 2_000,
      }}
    />
  );
};

export { Toast, toast };