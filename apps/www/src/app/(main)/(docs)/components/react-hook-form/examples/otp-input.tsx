"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RHFOtpInput, toast } from "@jamsr-ui/react";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { RHFDemoWrapper } from "../components/wrapper";

type FormValues = {
  otp: string;
};

const schema = object({
  otp: string().trim().length(6, "Otp must be 6 digits"),
});

export const RHFDemoOtpInput = () => {
  const defaultValues: FormValues = {
    otp: "",
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
      <RHFOtpInput<FormValues>
        numberOfDigits={6}
        name="otp"
        label="Enter the Otp"
        onComplete={(value) => toast.success(`Value is ${value}`)}
      />
    </RHFDemoWrapper>
  );
};
