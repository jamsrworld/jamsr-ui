/* eslint-disable no-console */

"use client";

import TvImg from "@/../public/tv.webp";
import { FileUploadSingleDefault } from "./default";
import { useState } from "react";

export const FileUploadControlled = () => {
  const [value, setValue] = useState<string | null>(TvImg.src);
  return (
    <FileUploadSingleDefault
      helperText={`Value is ${value}`}
      value={value}
      onValueChange={setValue}
    />
  );
};
