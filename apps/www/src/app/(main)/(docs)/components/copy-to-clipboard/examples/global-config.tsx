"use client";

import { CopyToClipboard, toast, UIConfigProvider } from "@jamsr-ui/react";

export const CopyToClipboardGlobalConfig = () => {
  const onSuccess = ({ message }: { message?: string }) => {
    // Play sound effect
    const audio = new Audio("/copy.mp3");
    void audio.play();
    toast.success(`${message} copied to clipboard`);
  };

  const onError = () => {
    toast.error("Failed to copy to clipboard");
  };

  return (
    <UIConfigProvider
      copyToClipboard={{
        onSuccess,
        onError,
      }}
    >
      <CopyToClipboard content="Text1" message="Text 1">
        Click me to copy 1
      </CopyToClipboard>
      <CopyToClipboard content="Text2" message="Text 2">
        Click me to copy 2
      </CopyToClipboard>
    </UIConfigProvider>
  );
};
