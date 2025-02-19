"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  SelectItem,
} from "@jamsr-ui/react";
import { RHFInput, RHFProvider, RHFSelect } from "@jamsr-ui/rhf";
import { useForm } from "react-hook-form";

type FormValues = {
  appName: string;
  currency: string;
  status: string;
};

export const CardWithForm = () => {
  const defaultValues: FormValues = {
    appName: "",
    currency: "",
    status: "",
  };
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader heading="Site Setting" />
        <CardContent>
          <RHFProvider isPending={false} onSubmit={onSubmit} methods={methods}>
            <RHFInput<FormValues> name="appName" label="App Name" />
            <RHFInput<FormValues> name="currency" label="Currency" />
            <RHFSelect<FormValues> name="status" label="Status">
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </RHFSelect>
            <Button>Submit</Button>
          </RHFProvider>
        </CardContent>
      </Card>
    </div>
  );
};
