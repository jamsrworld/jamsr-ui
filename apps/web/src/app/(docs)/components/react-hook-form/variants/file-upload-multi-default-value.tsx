"use client";

import TvImg from "@/../public/tv.webp";
import { type ImageMetadata } from "@/app/config";
import { RHFDemoFileUploadMulti } from "./file-upload-multi";

const images: ImageMetadata[] = [
  {
    height: 0,
    name: "TV",
    placeholder: "",
    url: TvImg.src,
    width: 0,
  },
];

export const RHFDemoFileUploadMultiDefaultValue = () => {
  return <RHFDemoFileUploadMulti images={images} />;
};
