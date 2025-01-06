import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mergeGlobalProps,
  type UIProps,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";

export type CardFooterProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const CardFooter = <T extends React.ElementType = "div">(
  $props: CardFooterProps<T>,
) => {
  const { cardFooter: _globalProps = {} } = useUIStyle();
  const _props = $props as UIProps<"div">;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

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
      {globalProps.children}
      {children}
    </Component>
  );
};
