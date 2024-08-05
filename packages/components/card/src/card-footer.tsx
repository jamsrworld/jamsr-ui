import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import type { ComponentPropsWithRef } from "react";

export type CardFooterProps = ComponentPropsWithRef<"div">;

export const CardFooter = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardFooterProps>,
) => {
  const { children, className, as, ...restProps } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-slot="footer"
      className={cn("flex justify-end gap-2 px-4 pb-4", className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};
