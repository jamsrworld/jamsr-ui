import { ComponentPropsWithAs, cn } from "@jamsr-ui/utils";

export type CardFooterProps = {};

export const CardFooter = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardFooterProps>,
) => {
  const { children, className, as, ...restProps } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-slot="footer"
      className={cn("flex justify-end gap-2 px-4 pb-4", className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};