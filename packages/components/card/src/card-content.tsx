import { useUIStyle } from "@jamsr-ui/styles";
import { cn, deepMergeProps, type ComponentPropsWithAs } from "@jamsr-ui/utils";

export type CardContentProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const CardContent = <T extends React.ElementType = "div">(
  $props: CardContentProps<T>,
) => {
  const { cardContent: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const { as, className: $className, ...restProps } = props;
  const Component = as ?? "div";
  const { cardContent } = useUIStyle();
  const className = cn("h-full p-4", cardContent?.className, $className);
  return <Component data-slot="content" className={className} {...restProps} />;
};
