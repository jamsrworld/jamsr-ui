"use client";

import { Clipboard } from "ui/clipboard";

export const ClipboardEvents = (props: Clipboard.Props) => {
  const { text = "Hello world!", ...rest } = props;
  const onSuccess = () => {
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
      Click me to copy text
      <Clipboard.Icon />
    </Clipboard>
  );
};
