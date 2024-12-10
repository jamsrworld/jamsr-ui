import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";

export type CardFooterProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const CardFooter = <T extends React.ElementType = "div">(
  $props: CardFooterProps<T>,
) => {
  const { cardFooter:  Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { children, className: $className, as, ...restProps } = props;
  const Component = as ?? "div";

  const { cardFooter } = useUIStyle();
  const className = cn(
    "flex justify-end gap-2 px-4 pb-4",
    cardFooter?.className,
    $className,
  );
  return (
    <Component data-slot="footer" className={className} {...restProps}>
      {children}
    </Component>
  );
};
