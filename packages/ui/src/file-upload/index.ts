import { FileUpload as FileUploadRoot } from "./file-upload";

import type { VariantProps } from "tailwind-variants";

import type { fileUploadStyles } from "./styles";

export const FileUpload = FileUploadRoot;

export namespace FileUpload {
  export interface Props extends FileUploadRoot.Props {}
  export type Variants = VariantProps<typeof fileUploadStyles>;
}

export { useFileUpload } from "./use-file-upload";
export { formatBytes } from "./utils";
