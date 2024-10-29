/* eslint-disable no-console */

"use client";

import { ImageMetadata, uploadApiUrl } from "@/app/config";
import {
  type FileUploadError,
  SingleFileUpload,
  type SingleFileUploadProps,
  toast,
} from "@jamsr-ui/react";

export const FileUploadDefault = (props: Partial<SingleFileUploadProps>) => {
  const { dropzoneOptions, ...restProps } = props;
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
    return `http://localhost:7000/${response.url}`;
  };

  return (
    <SingleFileUpload
      onUploadSuccess={onUploadSuccess}
      getFileUrlAfterUpload={getFileUrlAfterUpload}
      uploadApiUrl={uploadApiUrl}
      inputName="file"
      className="aspect-video h-40"
      onError={handleOnError}
      onDelete={handleOnDelete}
      showDeleteBtn
      {...restProps}
      dropzoneOptions={{
        ...dropzoneOptions,
      }}
    />
  );
};
