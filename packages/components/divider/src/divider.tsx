import { useUIConfig } from "@jamsr-ui/config";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import {
  dividerVariants,
  type DividerSlots,
  type DividerVariants,
} from "./style";

export type DividerProps = DividerVariants & {
  classNames?: SlotsToClasses<DividerSlots>;
  className?: string;
  children?: React.ReactNode;
};

export const Divider = ($props: DividerProps) => {
  const { divider: _globalProps = {} } = useUIConfig();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    dividerVariants.variantKeys,
  );
  const { className, children, classNames, ...restProps } = props;
  const styles = dividerVariants(variantProps);

  const dividerClassNames = styles.divider({
    className: cn(classNames?.divider),
  });
  const { orientation = "horizontal" } = variantProps;
  return (
    <div
      {...restProps}
      data-component="divider"
      className={styles.base({ className: cn(classNames?.base, className) })}
      data-orientation={orientation}
    >
      <div className={dividerClassNames} />
      {!!children && (
        <>
          {children}
          <div className={dividerClassNames} />
        </>
      )}
    </div>
  );
};
