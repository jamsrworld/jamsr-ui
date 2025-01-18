import { CopyToClipboard } from "@jamsr-ui/react";

export const CopyToClipboardWithoutButton = () => {
  return (
    <CopyToClipboard content="Hello world!" hideCopyButton>
      Click me to copy text
    </CopyToClipboard>
  );
};
