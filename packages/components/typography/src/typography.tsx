import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { typographyVariants, type TypographyVariants } from "./style";

export type TypographyProps<T extends React.ElementType = "div"> = Omit<
  ComponentPropsWithAs<T, TypographyVariants>,
  "as"
> & {
  as: T;
};

export const Typography = <T extends React.ElementType = "div">(
  props: TypographyProps<T>,
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

  const Component = (as ?? "div") as unknown as React.ElementType;
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
