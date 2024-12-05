import { Select, type SelectProps } from "@jamsr-ui/select";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & SelectProps;

export const RHFSelect = <T extends FieldValues>(props: Props<T>) => {
  const { name, isMultiple, ...restProps } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        const $value = isMultiple ? value : [value];
        const onValueChange = (value: string[]) => {
          onChange(isMultiple ? value : (value[0] ?? ""));
        };
        return (
          <Select
            value={$value}
            onValueChange={onValueChange}
            onBlur={onBlur}
            isInvalid={!!error}
            data-invalid={!!error}
            helperText={error?.message}
            isMultiple={isMultiple}
            {...restProps}
          />
        );
      }}
    />
  );
};
