import { Typography } from "@jamsr-ui/typography";
import { type ComponentPropsWithAs, cn } from "@jamsr-ui/utils";
import { forwardRef, type ForwardedRef } from "react";

export type CardHeaderProps = {
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  gutterBottom?: boolean;
  children?: React.ReactNode;
};

export const CardHeaderInner = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardHeaderProps>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    as,
    heading,
    className,
    children,
    action,
    subHeading,
    gutterBottom,
    ...restProps
  } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-component="card-header"
      ref={ref}
      className={cn(
        "relative flex justify-between px-4 pt-4",
        { "pb-4": gutterBottom },
        className,
      )}
      {...restProps}
    >
      {children || (
        <>
          <div className="grid gap-1">
            <Typography variant="h6">{heading}</Typography>
            {subHeading && (
              <Typography
                className="text-foreground-secondary"
                variant="caption"
              >
                {subHeading}
              </Typography>
            )}
          </div>
          {action}
        </>
      )}
    </Component>
  );
};

export const CardHeader = forwardRef(CardHeaderInner);
