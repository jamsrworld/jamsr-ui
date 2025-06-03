import { useUIConfig } from "@jamsr-ui/config";
import {
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { textVariants, type TextVariants } from "./styles";

type Props = TextVariants;

export type TextProps<T extends React.ElementType = "p"> = Props &
  ComponentPropsWithAs<T, TextVariants>;

export const Text = <T extends React.ElementType = "p">(
  $props: TextProps<T>,
) => {
  const { text: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"p", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    textVariants.variantKeys,
  );

  const { as, className, ...restProps } = props;
  const Component = (as ?? "p") as unknown as React.ElementType;
  return (
    <Component
      data-component="text"
      className={textVariants({
        ...variantProps,
        className,
      })}
      {...restProps}
    />
  );
};
