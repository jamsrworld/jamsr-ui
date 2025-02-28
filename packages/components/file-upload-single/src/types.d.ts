import { type FileUploadSingleProps } from ".";

declare module "@jamsr-ui/config" {
  export interface UIConfigType {
    fileUploadSingle?: Partial<FileUploadSingleProps>;
  }
}
