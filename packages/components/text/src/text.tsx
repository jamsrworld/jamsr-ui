import { useUIStyle } from "@jamsr-ui/styles";
import {
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type ComponentPropsWithAs,
  type UIProps,
} from "@jamsr-ui/utils";
import { textVariants, type TextVariants } from "./styles";

type Props = TextVariants;

export type TextProps<T extends React.ElementType = "div"> = Props &
  Omit<ComponentPropsWithAs<T, TextVariants>, "as"> & {
    as: T;
  };

export const Text = <T extends React.ElementType = "div">(
  $props: TextProps<T>,
) => {
  const { text: _globalProps = {} } = useUIStyle();
  const _props = $props as UIProps<"div", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    textVariants.variantKeys,
  );

  const { as, className, ...restProps } = props;
  const Component = (as ?? "div") as unknown as React.ElementType;
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
