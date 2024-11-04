import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { badgeVariants, type BadgeVariants } from "./style";

export type BadgeProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, BadgeVariants>;

export const Badge = <T extends React.ElementType = "div">(
  $props: BadgeProps<T>,
) => {
  const { badge: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { children, className, color, size, isRounded, ...restProps } = props;
  const style = badgeVariants({
    color,
    className,
    isRounded,
    size,
  });
  return (
    <div data-component="badge" className={style} {...restProps}>
      {children}
    </div>
  );
};
