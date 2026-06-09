"use client";

import { Clipboard } from "jamsrui/clipboard";

export const ClipboardSoundEffect = (props: Clipboard.Props) => {
  const { text = "Hello world!", ...rest } = props;
  const onSuccess = () => {
    // Play sound effect
    const audio = new Audio("/copy.mp3");
    void audio.play();

    console.log("Copied to clipboard");
  };

  const onError = () => {
    console.log("Failed to copy to clipboard");
  };
  return (
    <Clipboard
      text={text}
      onCopySuccess={onSuccess}
      onCopyError={onError}
      {...rest}
    >
      Click me to copy text with sound
      <Clipboard.Icon />
    </Clipboard>
  );
};
