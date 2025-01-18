import { CopyToClipboard } from "@jamsr-ui/react";

export const CopyToClipboardWithChildren = () => {
  return (
    <CopyToClipboard content="Hello world!">
      Click me to copy text
    </CopyToClipboard>
  );
};
