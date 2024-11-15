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
  const { divider: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

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
    className: cn(classNames?.divider, className),
  });

  return (
    <div
      {...restProps}
      data-component="divider"
      className={styles.base({ className: classNames?.base })}
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
