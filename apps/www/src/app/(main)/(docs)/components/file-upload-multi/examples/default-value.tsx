/* eslint-disable no-console */

"use client";

import { type FileUploadMultiState } from "@jamsr-ui/react";
import AvatarImg from "~/avatar.png";
import { FileUploadUsage } from "./usage";

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
