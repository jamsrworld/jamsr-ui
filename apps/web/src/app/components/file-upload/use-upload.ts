import axios, { type AxiosProgressEvent, type AxiosRequestConfig } from "axios";

export type ImageMetadata = {
  name: string;
  url: string;
  placeholder: string;
  width: number;
  height: number;
};

export type FileMetadata = {
  name: string;
  url: string;
  size: number;
};
export const CDN_SERVER_URL = "https://cdn.jamsrworld.com";

export const postUploadFile = async (
  formData: FormData,
  headers: AxiosRequestConfig,
) =>
  axios.post<ImageMetadata | FileMetadata>(CDN_UPLOAD_URL, formData, headers);

type Args = {
  onProgress?: (value: number) => void;
  file: File;
};

export const uploadFile = async (args: Args) => {
  const { onProgress, file } = args;

  const formData = new FormData();
  formData.append("file", file);

  return postUploadFile(formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent: AxiosProgressEvent) => {
      const progressVal =
        (progressEvent.loaded / (progressEvent.total ?? 0)) * 100;
      onProgress?.(Number(progressVal.toFixed(0)));
    },
  });
};
