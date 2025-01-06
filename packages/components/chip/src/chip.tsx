import { CloseFilledIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import type {
  ComponentPropsWithAs,
  SlotsToClasses,
  UIProps,
} from "@jamsr-ui/utils";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import React from "react";
import { chip, type ChipSlots, type ChipVariantsProps } from "./styles";

type Props = {
  classNames?: SlotsToClasses<ChipSlots>;
  className?: string;
} & ChipVariantsProps & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    onDelete?: () => void;
  };

export type ChipProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, Props>;

export const Chip = <T extends React.ElementType = "div">(
  $props: ChipProps<T>,
) => {
  const { chip: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(mergedProps, chip.variantKeys);

  const {
    as,
    children,
    onDelete,
    className,
    startContent,
    endContent,
    classNames,
    ...restProps
  } = props;
  const Comp: React.ElementType = as ?? "div";
  const styles = chip(variantProps);
  return (
    <Comp
      data-component="chip"
      data-slot="base"
      className={styles.base({
        className: cn(className, classNames?.base),
      })}
      {...restProps}
    >
      <div
        className={styles.content({ className: classNames?.content })}
        data-slot="content"
      >
        {startContent}
        {globalProps.children}
        {children}
        {endContent}
      </div>
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className={styles.closeButton({ className: classNames?.closeButton })}
        >
          <CloseFilledIcon className="size-4" />
        </button>
      )}
    </Comp>
  );
};
