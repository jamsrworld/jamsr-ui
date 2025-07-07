import { Select, SelectValue, type SelectProps } from "@jamsr-ui/select";
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
        const $value = isMultiple ? value : value ? [value] : [];
        const onValueChange = (value: SelectValue[]) => {
          onChange(isMultiple ? value : (value[0] ?? ""));
        };
        return (
          <Select
            isFormControl
            value={$value}
            onValueChange={onValueChange}
            onBlur={onBlur}
            isInvalid={!!error}
            data-invalid={!!error}
            errorMessage={error?.message}
            isMultiple={isMultiple}
            {...restProps}
          />
        );
      }}
    />
  );
};
