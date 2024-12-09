import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { typographyVariants, type TypographyVariants } from "./style";

export type TypographyProps<T extends React.ElementType = "div"> = Omit<
  ComponentPropsWithAs<T, TypographyVariants>,
  "as"
> & {
  as: T;
};

export const Typography = <T extends React.ElementType = "div">(
  $props: TypographyProps<T>,
) => {
  const { typography:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const {
    as,
    className,
    variant,
    gutterBottom,
    gradient,
    leading,
    ...restProps
  } = props;
  const Component = (as ?? "div") as unknown as React.ElementType;

  return (
    <Component
      data-component="typography"
      className={typographyVariants({
        variant,
        leading,
        gutterBottom,
        gradient,
        className,
      })}
      {...restProps}
    />
  );
};
