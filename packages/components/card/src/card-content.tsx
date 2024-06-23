import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";

export type CardContentProps = NonNullable<unknown>;

export const CardContent = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, CardContentProps>,
) => {
  const { as, className, ...restProps } = props;
  const Component = as ?? "div";
  return (
    <Component
      data-slot="content"
      className={cn("p-4", className)}
      {...restProps}
    />
  );
};
