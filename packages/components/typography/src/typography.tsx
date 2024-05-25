import { type UIProps, forwardRefUI } from "@jamsr-ui/utils";
import { typographyVariants, type TypographyVariants } from "./style";

export type TypographyProps = UIProps<"p"> & TypographyVariants;

export const Typography = forwardRefUI<"p", TypographyProps>((props, ref) => {
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
      ref={ref}
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
});
