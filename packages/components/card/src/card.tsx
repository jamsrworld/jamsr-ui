import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cardVariants, type CardVariants } from "./styles";

export type CardProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T> & CardVariants;

export const Card = <T extends React.ElementType = "div">(
  $props: CardProps<T>,
) => {
  const { card: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
  const {
    as,
    className: $className,
    children,
    bg,
    variant,
    radius,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const { card } = useUIStyle();
  const className = cardVariants({
    bg,
    variant,
    className: cn(card?.className, $className),
    radius,
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
