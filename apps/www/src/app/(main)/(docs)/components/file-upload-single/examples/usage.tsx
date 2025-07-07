/* eslint-disable no-console */

"use client";

import { type ImageMetadata } from "@/app/config";
import { CDN_API_URL, CDN_UPLOAD_URL } from "@/utils/config";
import {
  type FileUploadError,
  FileUploadSingle,
  type FileUploadSingleProps,
  toast,
} from "@jamsr-ui/react";

export const FileUploadUsage = (props: Partial<FileUploadSingleProps>) => {
  const { dropzoneOptions, isAvatar, classNames, ...restProps } = props;
  const handleOnError = ({ message }: FileUploadError) => {
    console.log("error:->", message);
    toast.error(message);
  };

  const onUploadSuccess = (response: ImageMetadata) => {
    console.log("response:->", response);
  };

  const handleOnDelete = () => {
    console.log("delete");
  };

  const getFileUrlAfterUpload = (response: ImageMetadata) => {
    return `${CDN_API_URL}/${response.url}`;
  };

  return (
    <FileUploadSingle
      label="Upload a file"
      onUploadSuccess={onUploadSuccess}
      getFileUrlAfterUpload={getFileUrlAfterUpload}
      uploadApiUrl={CDN_UPLOAD_URL}
      inputName="file"
      classNames={{
        picker: isAvatar ? "" : "aspect-video h-40",
        ...classNames,
      }}
      onError={handleOnError}
      onDelete={handleOnDelete}
      showDeleteBtn
      isAvatar={isAvatar}
      {...restProps}
      dropzoneOptions={{
        ...dropzoneOptions,
      }}
    />
  );
};
