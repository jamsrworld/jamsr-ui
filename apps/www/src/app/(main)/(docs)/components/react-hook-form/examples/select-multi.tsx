"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SelectItem } from "@jamsr-ui/react";
import { RHFSelect } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";
import { array, object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  country: string[];
};

const schema = object({
  country: array(string().trim().min(1, "Country is required")),
});

export const RHFDemoSelectMulti = () => {
  const defaultValues: FormValues = {
    country: [],
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
      <RHFSelect<FormValues> name="country" label="Country" isMultiple>
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
