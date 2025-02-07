"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RHFTagsInput } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";
import { array, object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  tags: string[];
};

const schema = object({
  tags: array(string().trim().min(2, "Tags should be atleast 2 characters"))
    .min(2, "Minimum 2 tags required")
    .max(10, "Maximum 10 tags allowed"),
});

export const RHFDemoTagsInput = () => {
  const defaultValues: FormValues = {
    tags: [],
  };
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });
  return (
    <RHFDemoWrapper methods={methods} isPending={false} onSubmit={onSubmit}>
      <RHFTagsInput<FormValues>
        name="tags"
        placeholder="Enter your tags"
        label="Tags"
      />
    </RHFDemoWrapper>
  );
};
