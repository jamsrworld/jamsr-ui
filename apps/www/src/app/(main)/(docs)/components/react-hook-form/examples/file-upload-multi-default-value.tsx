"use client";

import { type ImageMetadata } from "@/app/config";
import { RHFDemoFileUploadMulti } from "./file-upload-multi";

const images: ImageMetadata[] = [
  {
    height: 0,
    name: "Image",
    placeholder: "",
    url: "https://cdn.jamsrworld.com/11-25-2024/_-media_-14--1732518710650-527259107.jpg",
    width: 0,
  },
];

export const RHFDemoFileUploadMultiDefaultValue = () => {
  return <RHFDemoFileUploadMulti images={images} />;
};
