/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { type FileUploadMultiState } from "@jamsr-ui/react";
import { useState } from "react";
import { FileUploadUsage } from "./usage";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<FileUploadMultiState[]>([
    {
      id: "asdfjlaf",
      preview: TvImg.src,
      progress: "COMPLETE",
      file: null,
    },
  ]);
  const onValueChange = (newValue: FileUploadMultiState[]) => {
    setValue(newValue);
  };
  return (
    <FileUploadUsage
      helperText={`Value is ${JSON.stringify(value)}`}
      value={value}
      onValueChange={onValueChange}
    />
  );
};
