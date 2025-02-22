import { useUIConfig } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mergeGlobalProps,
  type UIProps,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";

export type CardFooterProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T> & {
    gutterTop?: boolean;
  };

export const CardFooter = <T extends React.ElementType = "div">(
  $props: CardFooterProps<T>,
) => {
  const { cardFooter: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"div"> & {
    gutterTop?: boolean;
  };
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);

  const {
    children,
    className: $className,
    as,
    gutterTop,
    ...restProps
  } = props;
  const Component = as ?? "div";
  const { cardFooter } = useUIConfig();
  const className = cn(
    "flex justify-end gap-2 px-4 pb-4",
    gutterTop && "pt-4",
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
