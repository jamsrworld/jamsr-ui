import { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { typographyVariants, type TypographyVariants } from "./style";

export type TypographyProps = TypographyVariants;

export const Typography = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, TypographyProps>,
) => {
  const {
    as,
    className,
    variant,
    spaced,
    gutterBottom,
    gradient,
    fontSize,
    ...restProps
  } = props;
  const Component = as ?? "p";
  return (
    <Component
      data-component="typography"
      className={typographyVariants({
        variant,
        spaced,
        gutterBottom,
        gradient,
        fontSize,
        className,
      })}
      {...restProps}
    />
  );
};
