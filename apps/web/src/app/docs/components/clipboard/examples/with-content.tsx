"use client";

import { Clipboard } from "ui/clipboard";

export const ClipboardWithContent = (props: Clipboard.Props) => {
  const { text = "Hello world!", ...rest } = props;
  return (
    <Clipboard
      text={text}
      {...rest}
    >
      Click me to copy text
      <Clipboard.Icon />
    </Clipboard>
  );
};
