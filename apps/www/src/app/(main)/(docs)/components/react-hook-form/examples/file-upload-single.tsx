"use client";

import { type ImageMetadata } from "@/app/config";
import { CDN_API_URL, CDN_UPLOAD_URL } from "@/utils/config";
import { zodImage } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FileUploadError,
  RHFFileUploadSingle,
  toast,
} from "@jamsr-ui/react";
import { useForm } from "react-hook-form";
import { object } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  image: ImageMetadata;
};

const schema = object({
  image: zodImage("Image"),
});

export const RHFDemoFileUploadSingle = () => {
  const imageVal: ImageMetadata = {
    name: "",
    height: 0,
    url: "",
    placeholder: "",
    width: 0,
  };

  const defaultValues: FormValues = {
    image: imageVal,
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  const getFileUrlAfterUpload = (response: ImageMetadata) => {
    const { url } = response;
    if (url.startsWith("http")) return url;
    if (url === "") return "";
    return `${CDN_API_URL}/${response.url}`;
  };

  const handleError = (error: FileUploadError) => {
    toast.error(error.message);
  };

  const getValueFromResponse = (response: ImageMetadata) => {
    return response;
  };

  return (
    <RHFDemoWrapper methods={methods} isPending={false} onSubmit={onSubmit}>
      <RHFFileUploadSingle<FormValues>
        label="Your Image"
        name="image"
        inputName="file"
        getFileUrlAfterUpload={getFileUrlAfterUpload}
        getValueFromResponse={getValueFromResponse}
        uploadApiUrl={CDN_UPLOAD_URL}
        defaultStateValue={imageVal}
        onError={handleError}
      />
    </RHFDemoWrapper>
  );
};
