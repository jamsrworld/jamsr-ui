/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { type FileUploadMultiState } from "@jamsr-ui/react";
import { FileUploadUsage } from "./usage";

export const FileUploadUsageValue = () => {
  const defaultValue: FileUploadMultiState[] = [
    { id: "asdfjlaf", preview: TvImg.src, progress: "COMPLETE", file: null },
  ];
  return <FileUploadUsage defaultValue={defaultValue} />;
};
