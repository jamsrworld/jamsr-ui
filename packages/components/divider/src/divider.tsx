import { cn, type SlotsToClasses, type UIProps } from "@jamsr-ui/utils";
import {
  type DividerSlots,
  dividerVariants,
  type DividerVariants,
} from "./style";

type Props = UIProps<"div"> &
  DividerVariants & {
    classNames?: SlotsToClasses<DividerSlots>;
  };

export const Divider = (props: Props) => {
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
