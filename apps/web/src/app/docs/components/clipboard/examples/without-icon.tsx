"use client";

import { Clipboard } from "jamsrui/clipboard";

export const ClipboardWithoutIcon = (props: Clipboard.Props) => {
  const { text = "Hello world!", ...rest } = props;
  return (
    <Clipboard
      text={text}
      {...rest}
    >
      Click me to copy text
    </Clipboard>
  );
};
