import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useRadio, type UseRadioProps } from "./use-radio";

export type RadioProps<T extends React.ElementType = "label"> =
  ComponentPropsWithAs<T, UseRadioProps>;

export const Radio = (props: RadioProps) => {
  const {
    Component,
    getBaseProps,
    getControlProps,
    getDescriptionProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getWrapperProps,
    children,
    description,
  } = useRadio(props);

  return (
    <Component {...getBaseProps()}>
      <input {...getInputProps()} />
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && <span {...getDescriptionProps()}>{description}</span>}
      </div>
    </Component>
  );
};