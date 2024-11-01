import { RadioGroup, type RadioGroupProps } from "@jamsr-ui/radio";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & RadioGroupProps;

export const RHFRadioGroup = <T extends FieldValues>(props: Props<T>) => {
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
          <RadioGroup
            value={value}
            name={name}
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
