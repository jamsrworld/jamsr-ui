import { type CopyToClipboardProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    copyToClipboard?: Partial<CopyToClipboardProps>;
  }
}
