/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { FileUploadDefault } from "./default";
import { useState } from "react";
import { MultiFileUploadState } from "@jamsr-ui/react";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<MultiFileUploadState[]>([
    {
      id: "asdfjlaf",
      preview: TvImg.src,
      progress: "COMPLETE",
      file: null,
    },
  ]);
  const onValueChange = (newValue: MultiFileUploadState[]) => {
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
