import {
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type UIProps,
} from "@jamsr-ui/utils";
import { useUIConfig } from "@jamsr-ui/styles";
import { link, type LinkVariants } from "./styles";

interface Props {}
export type UseLinkProps = UIProps<"a", Props> & LinkVariants;

export const useLink = ($props: UseLinkProps) => {
  const { link: _globalProps = {} } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(mergedProps, link.variantKeys);

  const { as, children, className, ...restProps } = props;
  const Component = as ?? "a";

  const styles = link({
    className,
    ...variantProps,
  });

  const getLinkProps: PropGetter = (props) => ({
    ...restProps,
    ...props,
    className: styles,
    "data-component": "link",
  });

  return {
    Component,
    getLinkProps,
    children,
    globalChildren: _globalProps.children,
  };
};
