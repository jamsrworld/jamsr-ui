"use client";

import { type FileUploadError, SingleFileUpload } from "@jamsr-ui/react";
import { useState } from "react";

export const FileUploadDefault = () => {
  const [value, setValue] = useState("");
  const onFileSelect = async (file: File) => {
    console.log("file:->", file);
  };

  const handleOnError = ({ message }: FileUploadError) => {
    console.error("error:->", message);
  };
  return (
    <SingleFileUpload
      value={value}
      onValueChange={setValue}
      onFileSelect={onFileSelect}
      className="aspect-video h-40"
      onError={handleOnError}
      showDeleteBtn
      fileName="components-file-upload--single-file-nextjs-site.zip"
      fileSize={3473433}
      dropzoneOptions={{
        accept: {
          "file/*": [],
        },
      }}
    />
  );
};
