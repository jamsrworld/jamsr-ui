import { Autocomplete, type AutocompleteProps } from "@jamsr-ui/autocomplete";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & AutocompleteProps;

export const RHFAutocomplete = <T extends FieldValues>(props: Props<T>) => {
  const { name, children, ...restProps } = props;
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
          <Autocomplete
            value={value}
            onValueChange={onChange}
            onBlur={onBlur}
            isInvalid={!!error}
            data-invalid={!!error}
            helperText={error?.message}
            {...restProps}
          >
            {children}
          </Autocomplete>
        );
      }}
    />
  );
};
