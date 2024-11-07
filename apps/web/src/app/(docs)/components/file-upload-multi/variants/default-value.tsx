/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { type FileUploadMultiState } from "@jamsr-ui/react";
import { FileUploadDefault } from "./default";

export const FileUploadDefaultValue = () => {
  const defaultValue: FileUploadMultiState[] = [
    { id: "asdfjlaf", preview: TvImg.src, progress: "COMPLETE", file: null },
  ];
  return <FileUploadDefault defaultValue={defaultValue} />;
};
