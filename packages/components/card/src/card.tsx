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
  const { as, className, children, bg, bordered, ...restProps } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-component="card"
      data-slot="base"
      className={cn(cardVariants({ bg, className, bordered }))}
      {...restProps}
    >
      {children}
    </Component>
  );
};
