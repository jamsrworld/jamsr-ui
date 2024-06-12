import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from "react";
import { badgeVariants, type BadgeVariants } from "./style";

export type BadgeProps = BadgeVariants & ComponentPropsWithoutRef<"div">;

export const Badge = forwardRef(
  (props: BadgeProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, className, color, size, ...restProps } = props;
    return (
      <div
        data-component="badge"
        ref={ref}
        className={badgeVariants({
          color,
          className,
          size,
        })}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);
