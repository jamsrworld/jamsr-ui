"use client";

import { RHFInput } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";
import { RHFDemoWrapper } from "../components/wrapper";
import { UIRHFConfigProvider } from "@jamsr-ui/rhf";

type FormValues = {
  username: string;
};

export const RHFGlobalConfig = () => {
  const defaultValues: FormValues = {
    username: "",
  };
  const methods = useForm<FormValues>({
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <UIRHFConfigProvider
      provider={{
        classNames: { fieldset: "gap-12" },
        slotProps: {
          form: {
            autoComplete: "off",
          },
        },
      }}
    >
      <RHFDemoWrapper methods={methods} isPending={false} onSubmit={onSubmit}>
        <RHFInput<FormValues>
          name="username"
          label="Username"
          variant="outlined"
        />
        <RHFInput<FormValues>
          name="username"
          label="Username"
          variant="outlined"
        />
        <RHFInput<FormValues>
          name="username"
          label="Username"
          variant="outlined"
        />
      </RHFDemoWrapper>
    </UIRHFConfigProvider>
  );
};
