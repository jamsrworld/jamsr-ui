import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn, deepMergeProps, focusVisibleClasses } from "@jamsr-ui/utils";

export type LinkProps<T extends React.ElementType = "a"> =
  ComponentPropsWithAs<T> & {
    underline?: "hover" | "always" | "never";
  };

export const Link = <T extends React.ElementType = "a">(
  $props: LinkProps<T>,
) => {
  const { link: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { as, children, className, ...restProps } = props;
  const Component = as ?? "a";
  return (
    <Component
      data-component="link"
      className={cn(
        "cursor-pointer select-none text-foreground-link hover:underline hover:underline-offset-4",
        focusVisibleClasses,
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
