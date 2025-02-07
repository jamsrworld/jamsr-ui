"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RHFInput } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  username: string;
};

const schema = object({
  username: string().trim().min(1, "Username is required"),
});

export const RHFDemoInput = () => {
  const defaultValues: FormValues = {
    username: "",
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
      <RHFInput<FormValues>
        name="username"
        label="Username"
        variant="outlined"
      />
    </RHFDemoWrapper>
  );
};
