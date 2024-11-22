/* eslint-disable no-console */

"use client";

import { ImageAddIcon } from "@jamsr-ui/shared-icons";
import { FileUploadUsage } from "./usage";

export const FileUploadCustomized = () => {
  return (
    <FileUploadUsage
      className="w-full"
      classNames={{
        info: "text-secondary",
        picker: "bg-gray-100 border-primary max-h-[200px]",
      }}
      info="1 image"
      uploadIcon={<ImageAddIcon />}
      dropzoneOptions={{
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp"],
        },
        maxSize: 1.2 * 1024 * 1024,
      }}
    />
  );
};
