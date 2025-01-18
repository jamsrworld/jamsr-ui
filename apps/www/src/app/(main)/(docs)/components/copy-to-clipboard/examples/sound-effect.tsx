"use client";

import { CopyToClipboard, toast } from "@jamsr-ui/react";

export const CopyToClipboardSoundEffect = () => {
  const onSuccess = () => {
    // Play sound effect
    const audio = new Audio("/copy.mp3");
    void audio.play();

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
      Click me to copy text with sound
    </CopyToClipboard>
  );
};
