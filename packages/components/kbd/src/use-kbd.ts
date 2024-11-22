import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useMemo } from "react";
import { kbd, type KbdSlots, type KbdVariantProps } from "./style";
import { type KbdKey } from "./utils";

type Props = UIProps<"kbd"> & {
  classNames?: SlotsToClasses<KbdSlots>;
  keys?: KbdKey | KbdKey[];
};

export type UseKbdProps = Props & KbdVariantProps;

export const useKbd = ($props: UseKbdProps) => {
  const { kbd: kbdConfig = {} } = useUIStyle();
  const props = deepMergeProps(kbdConfig, $props);
  const { as, children, className, classNames, keys, title, ...restProps } =
    props;
  const Component = as ?? "kbd";

  const styles = useMemo(
    () =>
      kbd({
        className,
      }),
    [className],
  );

  const keysToRender =
    typeof keys === "string" ? [keys] : Array.isArray(keys) ? keys : [];

  const getKbdProps: PropGetter = (props) => ({
    ...props,
    ...restProps,
    className: styles.base({
      className: cn(classNames?.base, className, props?.className as string),
    }),
  });

  return {
    Component,
    classNames,
    title,
    children,
    keysToRender,
    getKbdProps,
    styles,
  };
};
