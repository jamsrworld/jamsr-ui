"use client";

import { type ImageMetadata } from "@/app/config";
import { CDN_API_URL, CDN_UPLOAD_URL } from "@/utils/config";
import { zodImage } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFFileUploadMulti } from "@jamsr-ui/react";
import { useForm } from "react-hook-form";
import { array, object } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  images: string[];
};

const schema = object({
  images: array(zodImage("Image")).min(2, "Minimum 2 images are required"),
});

export const RHFDemoFileUploadMulti = () => {
  const defaultValues: FormValues = {
    images: [],
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit, watch } = methods;
  console.log(watch());

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  const getFileUrlAfterUpload = (response: ImageMetadata) => {
    return `${CDN_API_URL}/${response.url}`;
  };

  return (
    <RHFDemoWrapper methods={methods} isPending={false} onSubmit={onSubmit}>
      <RHFFileUploadMulti<FormValues>
        name="images"
        inputName="file"
        getFileUrlAfterUpload={getFileUrlAfterUpload}
        uploadApiUrl={CDN_UPLOAD_URL}
      />
    </RHFDemoWrapper>
  );
};
