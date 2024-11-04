import { type SingleFileUploadProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUpload?: Partial<SingleFileUploadProps>;
  }
}
