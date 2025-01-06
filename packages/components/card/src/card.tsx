import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { cardVariants, type CardVariants } from "./styles";

type Props = CardVariants;

export type CardProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, Props>;

export const Card = <T extends React.ElementType = "div">(
  $props: CardProps<T>,
) => {
  const { card: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    cardVariants.variantKeys,
  );
  const { as, className: $className, children, ...restProps } = props;
  const Component = as ?? "div";
  const { card } = useUIStyle();
  const className = cardVariants({
    className: cn(card?.className, $className),
    ...variantProps,
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
