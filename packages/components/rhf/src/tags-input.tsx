/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type OtpInputProps } from "@jamsr-ui/otp-input";
import { TagsInput } from "@jamsr-ui/tags-input";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & OtpInputProps;

export const RHFTagsInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, ...restProps } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        return (
          <TagsInput
            isFormControl
            value={value as any}
            onValueChange={onChange as any}
            onBlur={onBlur}
            isInvalid={!!error}
            data-invalid={!!error}
            errorMessage={error?.message}
            {...restProps}
          />
        );
      }}
    />
  );
};
