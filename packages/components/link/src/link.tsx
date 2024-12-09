import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { deepMergeProps } from "@jamsr-ui/utils";
import { link, type LinkVariants } from "./styles";

export type LinkProps<T extends React.ElementType = "a"> =
  ComponentPropsWithAs<T> & LinkVariants;

export const Link = <T extends React.ElementType = "a">(
  $props: LinkProps<T>,
) => {
  const { link:  Props = {}, globalConfig } = useUIStyle();
  const props = deepMergeProps(Props, $props, globalConfig);

  const { as, children, className, underline, ...restProps } = props;
  const Component = as ?? "a";

  const styles = link({
    className,
    underline,
  });
  return (
    <Component data-component="link" className={styles} {...restProps}>
      {children}
    </Component>
  );
};
