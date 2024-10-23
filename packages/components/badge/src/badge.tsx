import { type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { badgeVariants, type BadgeVariants } from "./style";

export type BadgeProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, BadgeVariants>;

export const Badge = <T extends React.ElementType = "div">(
  props: BadgeProps<T>,
) => {
  const { children, className, color, size, ...restProps } = props;
  const style = badgeVariants({
    color,
    className,
    size,
  });
  return (
    <div data-component="badge" className={style} {...restProps}>
      {children}
    </div>
  );
};
