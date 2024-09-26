import { type ComponentPropsWithoutRef, type ForwardedRef } from "react";
import { dividerVariants, type DividerVariants } from "./style";

type Props = ComponentPropsWithoutRef<"div"> &
  DividerVariants & {
    gap?: string;
  };

export const Divider = (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    variant,
    orientation = "horizontal",
    absolute,
    children,
    gap = "px-2",
    ...restProps
  } = props;

  const slots = dividerVariants({
    variant,
    orientation,
    absolute,
  });

  return (
    <div
      ref={ref}
      data-component="divider"
      className={slots.base({ className })}
      {...restProps}
      data-orientation={orientation}
    >
      <div className={slots.divider()} />
      {children && (
        <>
          <span className={gap}>{children}</span>
          <div className={slots.divider()} />
        </>
      )}
    </div>
  );
};
