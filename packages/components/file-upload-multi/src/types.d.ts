import { type FileUploadMultiProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    fileUploadMulti?: Partial<FileUploadMultiProps>;
  }
}
