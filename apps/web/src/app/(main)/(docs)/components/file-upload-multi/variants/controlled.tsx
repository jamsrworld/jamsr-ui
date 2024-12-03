/* eslint-disable no-console */

"use client";

import { type FileUploadMultiState } from "@jamsr-ui/react";
import { useState } from "react";
import AvatarImg from "~/avatar.png";
import { FileUploadUsage } from "./usage";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<FileUploadMultiState[]>([
    {
      id: "asdfjlaf",
      preview: AvatarImg.src,
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
