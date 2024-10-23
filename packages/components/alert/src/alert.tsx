import {
  cn,
  type ComponentPropsWithAs,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { useCallback } from "react";
import { Error, Info, Success, Warning } from "./icons";
import { type AlertSlots, alertVariant, type AlertVariantProps } from "./style";

export type AlertProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, AlertVariantProps> & {
    heading?: React.ReactNode;
    action?: React.ReactNode;
    icon?: React.ReactNode;
    classNames?: SlotsToClasses<AlertSlots>;
  };

export const Alert = <T extends React.ElementType = "div">(
  props: AlertProps<T>,
) => {
  const {
    children,
    severity,
    as,
    className: $className,
    action,
    heading,
    variant,
    icon,
    classNames,
    ...restProps
  } = props;

  const styles = alertVariant({ severity, variant });
  const className = cn($className, classNames?.wrapper);
  const Component = as ?? "div";

  const Icon = useCallback(() => {
    if (typeof icon !== "undefined") return icon;
    switch (severity) {
      case "default":
        return <Info />;
      case "danger":
        return <Error />;
      case "info":
        return <Info />;
      case "warning":
        return <Warning />;
      case "success":
        return <Success />;
      default:
        null;
    }
    return null;
  }, [icon, severity]);

  return (
    <Component
      data-component="alert"
      data-slot="wrapper"
      className={styles.wrapper({ className })}
      {...restProps}
    >
      <Icon />
      <div
        className={styles.mainContent({ className: classNames?.mainContent })}
      >
        {heading && (
          <div
            data-slot="heading"
            className={styles.heading({ className: classNames?.heading })}
          >
            {heading}
          </div>
        )}
        <div
          data-slot="description"
          className={styles.description({ className: classNames?.description })}
        >
          {children}
        </div>
      </div>
      {action && (
        <div
          data-slot="action"
          className={styles.action({ className: classNames?.action })}
        >
          {action}
        </div>
      )}
    </Component>
  );
};
