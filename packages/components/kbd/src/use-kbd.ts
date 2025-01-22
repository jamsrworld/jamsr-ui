import { useUIConfig } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useMemo } from "react";
import { kbd, type KbdSlots, type KbdVariantProps } from "./styles";
import { type KbdKey } from "./utils";

type Props = KbdVariantProps & {
  classNames?: SlotsToClasses<KbdSlots>;
  keys?: KbdKey | KbdKey[];
};

export type UseKbdProps = UIProps<"kbd"> & Props;

export const useKbd = ($props: UseKbdProps) => {
  const { kbd: _globalProps = {}, globalConfig } = useUIConfig();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(mergedProps, kbd.variantKeys);
  const { as, children, className, classNames, keys, title, ...restProps } =
    props;
  const Component = as ?? "kbd";

  const styles = useMemo(
    () =>
      kbd({
        className,
        ...variantProps,
      }),
    [className, variantProps],
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
