"use client";

import { Controller, useFormContext } from "react-hook-form";

import { RHFContext } from "./rhf-context";
import { Field } from "../field";

import type { FieldValues, Path } from "react-hook-form";

export const RHFField = <T extends FieldValues>(
  props: {
    name: Path<T>;
    children: React.ReactNode;
  } & Field.Props,
) => {
  const { name, children, ...restProps } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => {
        return (
          <RHFContext value={{ field, fieldState, formState }}>
            <Field
              invalid={!!fieldState.error?.message}
              name={name}
              {...restProps}
            >
              {children}
            </Field>
          </RHFContext>
        );
      }}
    />
  );
};
