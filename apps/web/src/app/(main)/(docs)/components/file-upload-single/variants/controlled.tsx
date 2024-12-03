/* eslint-disable no-console */

"use client";

import { useState } from "react";
import AvatarImg from "~/avatar.png";
import { FileUploadUsage } from "./usage";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<string | null>(AvatarImg.src);
  return (
    <FileUploadUsage
      helperText={`Value is ${value}`}
      value={value}
      onValueChange={setValue}
    />
  );
};
