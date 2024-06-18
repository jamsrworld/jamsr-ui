import { type UIProps, cn, forwardRefUI } from "@jamsr-ui/utils";

export type CardFooterProps = UIProps<"div">;

export const CardFooter = forwardRefUI<"div", CardFooterProps>((props, ref) => {
  const { children, className, as, ...restProps } = props;
  const Component = as ?? "div";
  return (
    <Component
      ref={ref}
      data-slot="footer"
      className={cn("flex justify-end gap-2 px-4 pb-4", className)}
      {...restProps}
    >
      {children}
    </Component>
  );
});
