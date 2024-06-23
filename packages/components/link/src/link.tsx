import { ComponentPropsWithAs, cn, focusVisibleClasses } from "@jamsr-ui/utils";

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
        "text-primary hover:text-primary-dark cursor-pointer text-sm",
        focusVisibleClasses,
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
