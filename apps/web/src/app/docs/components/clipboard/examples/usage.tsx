"use client";

import { Clipboard } from "ui/clipboard";

export const ClipboardUsage = (props: Clipboard.Props) => {
  const { text = "Hello world!", ...rest } = props;
  return (
    <Clipboard
      text={text}
      {...rest}
    >
      <Clipboard.Icon />
    </Clipboard>
  );
};
