/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { FileUploadUsage } from "./usage";

export const FileUploadUsageValue = () => {
  return <FileUploadUsage defaultValue={TvImg.src} />;
};
