"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RHFSelect, SelectItem } from "@jamsr-ui/react";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  country: string;
};

const schema = object({
  country: string().trim().min(1, "Country is required"),
});

export const RHFDemoSelect = () => {
  const defaultValues: FormValues = {
    country: "",
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
      <RHFSelect<FormValues> name="country" label="Country">
        <SelectItem value="india">India</SelectItem>
        <SelectItem value="usa">USA</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="england">England</SelectItem>
        <SelectItem value="singapore">Singapore</SelectItem>
        <SelectItem value="switzerland">Switzerland</SelectItem>
      </RHFSelect>
    </RHFDemoWrapper>
  );
};
