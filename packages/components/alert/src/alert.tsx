import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type UIProps,
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

type Props = {
  heading?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  classNames?: SlotsToClasses<AlertSlots>;
} & AlertVariantProps;

export type AlertProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T, Props>;

export const Alert = <T extends React.ElementType = "div">(
  $props: AlertProps<T>,
) => {
  const { alert: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    alertVariant.variantKeys,
  );

  // const props = deepMergeProps(_globalProps, $props, globalConfig);
  const {
    children,
    as,
    className: $className,
    action,
    heading,
    icon,
    classNames,
    ...restProps
  } = props;
  const { status } = variantProps;

  const styles = alertVariant(variantProps);
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
