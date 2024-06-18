import {
  UIProps,
  cn,
  focusVisibleClasses,
  forwardRefUI,
} from "@jamsr-ui/utils";

type LinkProps = UIProps<"a">;

export const Link = forwardRefUI<"a", LinkProps>((props, ref) => {
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
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  );
});
Link.displayName = "UI.Link"