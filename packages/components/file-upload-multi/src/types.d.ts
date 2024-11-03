import { type MultiFileUploadProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUploadMulti?: Pick<MultiFileUploadProps, "className" | "classNames">;
  }
}
