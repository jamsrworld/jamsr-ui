import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn, focusVisibleClasses } from "@jamsr-ui/utils";

type LinkProps = {};

export const Link = <T extends React.ElementType = "a">(
  props: ComponentPropsWithAs<T, LinkProps>,
) => {
  const { as, children, className, ...restProps } = props;
  const Component = as ?? "a";
  return (
    <Component
      data-component="link"
      className={cn(
        "cursor-pointer text-sm text-foreground-link hover:underline hover:underline-offset-4",
        focusVisibleClasses,
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
