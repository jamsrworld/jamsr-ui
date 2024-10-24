"use client";

export {
  MultiFileUpload,
  useMultiFileUpload,
  type MultiFileUploadProps,
  type UseMultiFileUploadProps,
  type MultiFileUploadState,
} from "./multi";

export {
  SingleFileUpload,
  useSingleFileUpload,
  type SingleFileUploadProps,
  type UseSingleFileUploadProps,
} from "./single";

export type { FileError as FileUploadError } from "react-dropzone";
