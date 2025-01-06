import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import {
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import { link, type LinkVariants } from "./styles";

type Props = LinkVariants;
export type LinkProps<T extends React.ElementType = "a"> = ComponentPropsWithAs<
  T,
  Props
>;

export const Link = <T extends React.ElementType = "a">(
  $props: LinkProps<T>,
) => {
  const { link: _globalProps = {} } = useUIStyle();
  const _props = $props as UIProps<"a", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(mergedProps, link.variantKeys);
  const { as, children, className, ...restProps } = props;
  const Component = as ?? "a";

  const styles = link({
    className,
    ...variantProps,
  });
  return (
    <Component data-component="link" className={styles} {...restProps}>
      {globalProps.children}
      {children}
    </Component>
  );
};
