/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { useState } from "react";
import { FileUploadUsage } from "./usage";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<string | null>(TvImg.src);
  return (
    <FileUploadUsage
      helperText={`Value is ${value}`}
      value={value}
      onValueChange={setValue}
    />
  );
};
