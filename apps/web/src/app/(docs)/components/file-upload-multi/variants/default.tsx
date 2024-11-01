/* eslint-disable no-console */

"use client";

import { ImageMetadata } from "@/app/config";
import { CDN_API_URL, CDN_UPLOAD_URL } from "@/utils/config";
import {
  type FileUploadError,
  MultiFileUpload,
  MultiFileUploadProps,
  toast,
} from "@jamsr-ui/react";

export const FileUploadDefault = (props: Partial<MultiFileUploadProps>) => {
  const { dropzoneOptions, ...restProps } = props;
  const handleOnError = ({ message }: FileUploadError) => {
    console.log("error:->", message);
    toast.error(message);
  };

  const onUploadSuccess = ({
    id,
    response,
  }: {
    id: string;
    response: ImageMetadata;
  }) => {
    console.log("response:->", response);
  };

  const handleOnDelete = () => {
    console.log("delete");
  };

  const getFileUrlAfterUpload = (response: ImageMetadata) => {
    return `${CDN_API_URL}/${response.url}`;
  };

  return (
    <MultiFileUpload
      onUploadSuccess={onUploadSuccess}
      getFileUrlAfterUpload={getFileUrlAfterUpload}
      uploadApiUrl={CDN_UPLOAD_URL}
      inputName="file"
      onError={handleOnError}
      onDelete={handleOnDelete}
      showDeleteBtn
      {...restProps}
      dropzoneOptions={{
        maxFiles: 40,
        ...dropzoneOptions,
      }}
    />
  );
};
