import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cardVariants, type CardVariants } from "./style";

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
    ...restProps
  } = props;
  const Component = as ?? "div";
  const { card } = useUIStyle();
  const className = cardVariants({
    bg,
    variant,
    className: cn(card?.className, $className),
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
