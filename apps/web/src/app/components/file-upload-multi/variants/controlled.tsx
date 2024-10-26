/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { FileUploadDefault } from "./default";
import { useState } from "react";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<string | null>(TvImg.src);
  return (
    <FileUploadDefault
      helperText={`Value is ${value}`}
      value={value}
      onValueChange={setValue}
    />
  );
};
