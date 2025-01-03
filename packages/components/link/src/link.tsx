import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { deepMergeProps } from "@jamsr-ui/utils";
import { link, type LinkVariants } from "./styles";

export interface LinkProps2 {}
export type LinkProps<T extends React.ElementType = "a"> =
  ComponentPropsWithAs<T> & LinkVariants & LinkProps2;

/*
  
export interface LinkProps<T extends React.ElementType = "a">
  extends ComponentPropsWithAs<T>,
    LinkVariants {}
     */

export const Link = <T extends React.ElementType = "a">(
  $props: LinkProps<T>,
) => {
  const { link: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);
  const { as, children, className, underline, variant, ...restProps } = props;
  const Component = as ?? "a";

  const styles = link({
    className,
    underline,
    variant,
  });
  return (
    <Component data-component="link" className={styles} {...restProps}>
      {children}
    </Component>
  );
};
