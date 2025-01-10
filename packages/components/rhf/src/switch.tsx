import { Switch, type SwitchProps } from "@jamsr-ui/switch";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & SwitchProps;

export const RHFSwitch = <T extends FieldValues>(props: Props<T>) => {
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
          <Switch
            isFormControl
            checked={value}
            onCheckedChange={onChange}
            onBlur={onBlur}
            isInvalid={!!error}
            helperText={error?.message}
            data-form-control={name}
            {...restProps}
          />
        );
      }}
    />
  );
};
