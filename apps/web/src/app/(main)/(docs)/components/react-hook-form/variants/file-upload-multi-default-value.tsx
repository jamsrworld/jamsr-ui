"use client";

import { type ImageMetadata } from "@/app/config";
import AvatarImg from "~/avatar.png";
import { RHFDemoFileUploadMulti } from "./file-upload-multi";

const images: ImageMetadata[] = [
  {
    height: 0,
    name: "TV",
    placeholder: "",
    url: AvatarImg.src,
    width: 0,
  },
];

export const RHFDemoFileUploadMultiDefaultValue = () => {
  return <RHFDemoFileUploadMulti images={images} />;
};
