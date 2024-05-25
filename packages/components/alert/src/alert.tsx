import { Info } from "@jamsr-ui/shared-icons";
import { forwardRefUI, type UIProps } from "@jamsr-ui/utils";
import { alertVariant, type AlertVariantProps } from "./style";

export type AlertProps = UIProps<"div"> & AlertVariantProps;

export const Alert = forwardRefUI<"div", AlertProps>((props, ref) => {
  const { children, severity, as, className, ...restProps } = props;
  const styles = alertVariant({ severity });

  const Component = as ?? "div";
  return (
    <Component
      ref={ref}
      className={styles.wrapper({ className })}
      {...restProps}
    >
      <Info className="shrink-0" />
      <div className={styles.message()}>{children}</div>
    </Component>
  );
});
Alert.displayName = "UI.Alert";
