import { type CopyToClipboardProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    copyToClipboard?: Partial<CopyToClipboardProps>;
  }
}
