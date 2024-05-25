import { type ComponentPropsWithAs, cn } from "@jamsr-ui/utils";
import { forwardRef, type ForwardedRef } from "react";

type CardContentProps = NonNullable<unknown>;
export const CardContentInner = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardContentProps>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { as, className, ...restProps } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-slot="content"
      className={cn("p-4", className)}
      ref={ref}
      {...restProps}
    />
  );
};

export const CardContent = forwardRef(CardContentInner);
