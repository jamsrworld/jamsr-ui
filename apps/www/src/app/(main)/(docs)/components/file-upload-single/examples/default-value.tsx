/* eslint-disable no-console */

"use client";

import AvatarImg from "~/avatar.png";
import { FileUploadUsage } from "./usage";

export const FileUploadUsageValue = () => {
  return <FileUploadUsage defaultValue={AvatarImg.src} />;
};
