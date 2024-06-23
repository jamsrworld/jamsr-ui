import { Typography } from "@jamsr-ui/typography";
import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";

export type CardHeaderProps = {
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  gutterBottom?: boolean;
  children?: React.ReactNode;
};

export const CardHeader = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardHeaderProps>,
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
      data-slot="header"
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
