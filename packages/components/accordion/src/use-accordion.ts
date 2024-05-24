import { type PropGetter, type UIProps } from "@jamsr-ui/utils";
import { useCallback, useMemo } from "react";
import { accordion } from "./style";

type Props = {
  className?: string;
};

export type UseAccordionProps = UIProps<"div"> & Props;

export const useAccordion = (props: UseAccordionProps) => {
  const { as, children, className, ...restProps } = props;
  const Component = as ?? "div";

  const slots = useMemo(
    () =>
      accordion({
        className,
      }),
    [className],
  );

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        className: slots,
        ...restProps,
        ...props,
      };
    },
    [slots, restProps],
  );

  return {
    Component,
    children,
    getBaseProps,
  };
};
