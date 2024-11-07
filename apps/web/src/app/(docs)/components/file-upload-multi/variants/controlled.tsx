/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { type FileUploadMultiState } from "@jamsr-ui/react";
import { useState } from "react";
import { FileUploadDefault } from "./default";

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
    console.log("onValueChange", newValue);
    setValue(newValue);
  };
  return (
    <FileUploadDefault
      helperText={`Value is ${JSON.stringify(value)}`}
      value={value}
      onValueChange={onValueChange}
    />
  );
};
