import { Textarea, type TextareaProps } from "@jamsr-ui/textarea";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & TextareaProps;

export const RHFTextarea = <T extends FieldValues>(props: Props<T>) => {
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
          <Textarea
            value={value}
            onValueChange={onChange}
            onBlur={onBlur}
            isInvalid={!!error}
            data-invalid={!!error}
            helperText={error?.message}
            {...restProps}
          />
        );
      }}
    />
  );
};
