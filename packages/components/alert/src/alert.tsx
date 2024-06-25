import { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { Error, Info, Success, Warning } from "./icons";
import { alertVariant, type AlertVariantProps } from "./style";

export type AlertProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, AlertVariantProps> & {
    heading?: React.ReactNode;
    action?: React.ReactNode;
    icon?: React.ReactNode;
  };

export const Alert = <T extends React.ElementType = "div">(
  props: AlertProps<T>,
) => {
  const {
    children,
    severity,
    as,
    className,
    action,
    heading,
    variant,
    icon,
    ...restProps
  } = props;

  const styles = alertVariant({ severity, variant, className });
  const Component = as ?? "div";

  const Icon = () => {
    if (typeof icon !== "undefined") return icon;
    switch (severity) {
      case "default":
        return <Info />;
      case "error":
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
  };

  return (
    <Component
      data-component="alert"
      data-slot="wrapper"
      className={styles.wrapper({ className })}
      {...restProps}
    >
      <Icon />
      <div>
        {heading && (
          <div
            data-slot="heading"
            className={styles.heading()}
          >
            {heading}
          </div>
        )}
        <div
          data-slot="description"
          className={styles.description()}
        >
          {children}
        </div>
      </div>
      {action && (
        <div
          data-slot="action"
          className={styles.action()}
        >
          {action}
        </div>
      )}
    </Component>
  );
};

<Alert
  as="a"
  href="/"
/>;
