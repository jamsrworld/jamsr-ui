import { type SingleFileUploadProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    fileUpload?: Pick<SingleFileUploadProps, "className" | "classNames">;
  }
}
