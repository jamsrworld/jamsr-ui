import { type FileUploadMultiProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUploadMulti?: Partial<FileUploadMultiProps>;
  }
}
