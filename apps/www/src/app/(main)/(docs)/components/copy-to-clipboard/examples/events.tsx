"use client";

import { CopyToClipboard, toast } from "@jamsr-ui/react";

export const CopyToClipboardEvents = () => {
  const onSuccess = () => {
    toast.success("Copied to clipboard");
  };

  const onError = () => {
    toast.error("Failed to copy to clipboard");
  };
  return (
    <CopyToClipboard
      content="Hello world!"
      onSuccess={onSuccess}
      onError={onError}
    >
      Click me to copy text
    </CopyToClipboard>
  );
};
