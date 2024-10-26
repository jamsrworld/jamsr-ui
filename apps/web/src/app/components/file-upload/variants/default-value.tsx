/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { FileUploadSingleDefault } from "./default";

export const FileUploadDefaultValue = () => {
  return <FileUploadSingleDefault defaultValue={TvImg.src} />;
};
