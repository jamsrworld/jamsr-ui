/* eslint-disable no-console */

"use client";

import { FileUploadUsage } from "./usage";
import AvatarImg from "~/avatar.png";

export const FileUploadUsageValue = () => {
  return <FileUploadUsage defaultValue={AvatarImg.src} />;
};
