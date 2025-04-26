"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RHFCheckbox } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";
import { boolean, object } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  agree: boolean;
};

const schema = object({
  agree: boolean(),
});

export const RHFDemoCheckbox = () => {
  const defaultValues: FormValues = {
    agree: false,
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
      <RHFCheckbox<FormValues>
        name="agree"
        label="Are your agree to the terms?"
      />
    </RHFDemoWrapper>
  );
};
