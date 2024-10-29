/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { FileUploadDefault } from "./default";

export const FileUploadDefaultValue = () => {
  return <FileUploadDefault defaultValue={TvImg.src} />;
};
