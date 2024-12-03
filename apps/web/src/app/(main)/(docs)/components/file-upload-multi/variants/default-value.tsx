/* eslint-disable no-console */

"use client";

import { type FileUploadMultiState } from "@jamsr-ui/react";
import { FileUploadUsage } from "./usage";
import AvatarImg from "~/avatar.png";

export const FileUploadUsageValue = () => {
  const defaultValue: FileUploadMultiState[] = [
    {
      id: "asdfjlaf",
      preview: AvatarImg.src,
      progress: "COMPLETE",
      file: null,
    },
  ];
  return <FileUploadUsage defaultValue={defaultValue} />;
};
