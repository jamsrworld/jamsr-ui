import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  type ComponentPropsWithAs,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { useCallback } from "react";
import { Error, Info, Success, Warning } from "./icons";
import {
  alertVariant,
  type AlertSlots,
  type AlertVariantProps,
} from "./styles";

export type AlertProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, AlertVariantProps> & {
    heading?: React.ReactNode;
    action?: React.ReactNode;
    icon?: React.ReactNode;
    classNames?: SlotsToClasses<AlertSlots>;
  };

export const Alert = <T extends React.ElementType = "div">(
  $props: AlertProps<T>,
) => {
  const { alert:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);
  const {
    children,
    status,
    as,
    className: $className,
    action,
    heading,
    variant,
    icon,
    classNames,
    radius,
    ...restProps
  } = props;

  const styles = alertVariant({ status, variant, radius });
  const className = cn($className, classNames?.wrapper);
  const Component = as ?? "div";

  const Icon = useCallback(() => {
    if (typeof icon !== "undefined") return icon;
    switch (status) {
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
  }, [icon, status]);

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
