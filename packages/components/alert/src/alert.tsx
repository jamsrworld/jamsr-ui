import { Info } from "@jamsr-ui/shared-icons";
import { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { alertVariant, type AlertVariantProps } from "./style";

export type AlertProps = AlertVariantProps;

export const Alert = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, AlertProps>,
) => {
  const { children, severity, as, className, ...restProps } = props;
  const styles = alertVariant({ severity });

  const Component = as ?? "div";
  return (
    <Component
      data-component="alert"
      data-slot="wrapper"
      className={styles.wrapper({ className })}
      {...restProps}
    >
      <Info className="shrink-0" />
      <div className={styles.message()}>{children}</div>
    </Component>
  );
};
