import { CircularProgress, LinearProgress } from "@jamsr-ui/progress";
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
    className,
    variant,
    isPending = false,
    children,
    isLoading = false,
    bg,
    bordered,
    ...restProps
  } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-component="card"
      data-slot="base"
      className={cn(cardVariants({ variant, bg, className, bordered }))}
      {...restProps}
    >
      {isLoading && (
        <LinearProgress
          className="absolute inset-0"
          isIntermediate
        />
      )}
      {isPending && (
        <div className="absolute inset-0 z-10 grid size-full place-content-center bg-black/50">
          <CircularProgress />
        </div>
      )}
      {children}
    </Component>
  );
};
