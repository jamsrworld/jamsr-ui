import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps, type PropGetter, type UIProps } from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import {
  accordion,
  type AccordionGroupVariantProps,
  type AccordionItemVariantProps,
} from "./style";

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
    color,
    hideIndicator,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const slots = useMemo(
    () =>
      accordion({
        className,
        fullWidth,
      }),
    [className, fullWidth],
  );

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        className: slots,
        "data-component": "accordion",
        ...props,
        ...restProps,
      };
    },
    [slots, restProps],
  );

  return {
    Component,
    children,
    getBaseProps,
    isMultiple,
    color,
    hideIndicator,
  };
};
