import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps, type PropGetter, type UIProps } from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import {
  accordion,
  type AccordionGroupVariantProps,
  type AccordionItemVariantProps,
} from "./styles";

type Props = {
  className?: string;
  isMultiple?: boolean;
};

export type UseAccordionProps = UIProps<"div"> &
  Props &
  AccordionItemVariantProps &
  AccordionGroupVariantProps;

export const useAccordion = ($props: UseAccordionProps) => {
  const { accordion: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    as,
    children,
    className,
    isMultiple = false,
    fullWidth,
    hideIndicator,
    variant = "splitted",
    radius = "md",
    ...restProps
  } = props;
  const Component = as ?? "div";

  const styles = useMemo(
    () =>
      accordion({
        className,
        fullWidth,
        variant,
        radius,
      }),
    [className, fullWidth, radius, variant],
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
    variant,
    radius,
  };
};
