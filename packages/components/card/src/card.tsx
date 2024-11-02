import { useUIStyle } from "@jamsr-ui/core";
import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { type ComponentPropsWithoutRef } from "react";
import { cardVariants, type CardVariants } from "./style";

export type CardProps = ComponentPropsWithoutRef<"div"> &
  CardVariants & {
    isPending?: boolean;
    isLoading?: boolean;
  };

export const Card = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardProps>,
) => {
  const {
    as,
    className: $className,
    children,
    bg,
    bordered,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const { card } = useUIStyle();
  const className = cardVariants({
    bg,
    className: cn(card?.className, $className),
    bordered,
  });
  return (
    <Component
      data-component="card"
      data-slot="base"
      className={className}
      {...restProps}
    >
      {children}
    </Component>
  );
};
