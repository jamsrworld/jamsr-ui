import { type FileUploadSingleProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUploadSingle?: Partial<FileUploadSingleProps>;
  }
}
