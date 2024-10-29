/* eslint-disable no-console */

"use client";

import { MultiFileUploadState } from "@jamsr-ui/react";
import { FileUploadDefault } from "./default";
import TvImg from "@/../public/tv.webp";

export const FileUploadDefaultValue = () => {
  const defaultValue: MultiFileUploadState[] = [
    { id: "asdfjlaf", preview: TvImg.src, progress: "COMPLETE", file: null },
  ];
  return <FileUploadDefault defaultValue={defaultValue} />;
};
