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
    ...restProps
  } = props;

  const styles = dividerVariants({
    variant,
    orientation,
  });

  return (
    <div
      {...restProps}
      data-component="divider"
      className={styles.base({ className: cn(classNames?.base, className) })}
      data-orientation={orientation}
    >
      <div className={styles.divider({ className: classNames?.divider })} />
      {children && (
        <>
          {children}
          <div className={styles.divider({ className: classNames?.divider })} />
        </>
      )}
    </div>
  );
};
