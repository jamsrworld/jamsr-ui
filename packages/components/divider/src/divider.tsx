import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type SlotsToClasses } from "@jamsr-ui/utils";
import {
  type DividerSlots,
  dividerVariants,
  type DividerVariants,
} from "./style";

export type DividerProps = DividerVariants & {
  classNames?: SlotsToClasses<DividerSlots>;
  className?: string;
  children?: React.ReactNode;
};

export const Divider = ($props: DividerProps) => {
  const { divider:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const {
    className,
    variant,
    orientation = "horizontal",
    children,
    classNames,
    color,
    ...restProps
  } = props;

  const styles = dividerVariants({
    variant,
    orientation,
    color,
  });

  const dividerClassNames = styles.divider({
    className: cn(classNames?.divider),
  });

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
