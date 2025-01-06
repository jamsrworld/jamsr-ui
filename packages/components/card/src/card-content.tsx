import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mergeGlobalProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";

export type CardContentProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const CardContent = <T extends React.ElementType = "div">(
  $props: CardContentProps<T>,
) => {
  const { cardContent: _globalProps = {} } = useUIStyle();
  const _props = $props as UIProps<"div">;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const { as, className: $className, children, ...restProps } = props;
  const Component = as ?? "div";
  const { cardContent } = useUIStyle();
  const className = cn("h-full p-4", cardContent?.className, $className);

  return (
    <Component data-slot="content" className={className} {...restProps}>
      {globalProps.children}
      {children}
    </Component>
  );
};
