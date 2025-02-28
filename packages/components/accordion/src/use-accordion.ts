import { useUIConfig } from "@jamsr-ui/config";
import {
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type UIProps,
} from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import {
  accordion,
  type AccordionGroupVariantProps,
  type AccordionItemVariantProps,
} from "./styles";

type Props = {
  className?: string;
  isMultiple?: boolean;
} & AccordionItemVariantProps &
  AccordionGroupVariantProps;

export type UseAccordionProps = UIProps<"div"> & Props;

export const useAccordion = ($props: UseAccordionProps) => {
  const { accordion: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    accordion.variantKeys,
  );

  const {
    as,
    children,
    className,
    isMultiple = false,
    hideIndicator,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const styles = useMemo(
    () => accordion({ ...variantProps, className }),
    [className, variantProps],
  );

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        className: styles,
        "data-component": "accordion",
        ...props,
        ...restProps,
      };
    },
    [styles, restProps],
  );

  return {
    Component,
    children,
    getBaseProps,
    isMultiple,
    hideIndicator,
    ...variantProps,
  };
};
