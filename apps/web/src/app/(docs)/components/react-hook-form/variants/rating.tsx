"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RHFRating } from "@jamsr-ui/react";
import { useForm } from "react-hook-form";
import { number, object } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  rating: number;
};

const schema = object({
  rating: number().min(1, "Rating is required"),
});

export const RHFDemoRating = () => {
  const defaultValues: FormValues = {
    rating: 0,
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
      <RHFRating<FormValues> name="rating" label="Rating" />
    </RHFDemoWrapper>
  );
};
