import { type ComponentProps } from "react";

export type CheckboxLabelProps = {
  id: string;
} & ComponentProps<"label">;

export const Label = (props: CheckboxLabelProps) => {
  const { children, id, className, ...restProps } = props;
  return (
    <label className={className} htmlFor={id} {...restProps}>
      {children}
    </label>
  );
};
