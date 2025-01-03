import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { textVariants, type TextVariants } from "./styles";

export type TextProps<T extends React.ElementType = "div"> = Omit<
  ComponentPropsWithAs<T, TextVariants>,
  "as"
> & {
  as: T;
};

export const Text = <T extends React.ElementType = "div">(
  $props: TextProps<T>,
) => {
  const { text: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
  const { as, className, variant, gradient, leading, ...restProps } = props;
  const Component = (as ?? "div") as unknown as React.ElementType;

  return (
    <Component
      data-component="text"
      className={textVariants({
        variant,
        leading,
        gradient,
        className,
      })}
      {...restProps}
    />
  );
};
