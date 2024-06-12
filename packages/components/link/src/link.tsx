import {
  type ComponentPropsWithAs,
  cn,
  focusVisibleClasses,
} from "@jamsr-ui/utils";
import { forwardRef, type ForwardedRef } from "react";

type LinkProps = { children: React.ReactNode };

export const LinkInner = <T extends React.ElementType = "a">(
  props: ComponentPropsWithAs<T, LinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const { as, children, className, ...restProps } = props;
  const Component = as ?? "a";
  return (
    <Component
      data-component="link"
      className={cn(
        "cursor-pointer text-sm text-primary hover:text-primary-dark",
        focusVisibleClasses,
        className,
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const Link = forwardRef(LinkInner);
