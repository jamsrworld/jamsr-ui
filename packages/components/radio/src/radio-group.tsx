import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { RadioGroupProvider } from "./radio-group-context";
import type { UseRadioGroupProps } from "./use-radio-group";
import { useRadioGroup } from "./use-radio-group";

export type RadioGroupProps<
  T extends React.ElementType = "div",
  V extends string = string,
> = ComponentPropsWithAs<T, UseRadioGroupProps<V>>;

export const RadioGroup = <
  T extends React.ElementType = "div",
  V extends string = string,
>(
  props: RadioGroupProps<T, V>,
) => {
  const {
    Component,
    context,
    getBaseProps,
    getHelperTextProps,
    getLabelProps,
    getWrapperProps,
    label,
    children,
    helperText,
  } = useRadioGroup(props);

  return (
    <Component {...getBaseProps()}>
      {label && <span {...getLabelProps()}>{label}</span>}
      <div {...getWrapperProps()}>
        <RadioGroupProvider value={context}>{children}</RadioGroupProvider>
      </div>
      <div {...getHelperTextProps()}>{helperText}</div>
    </Component>
  );
};
