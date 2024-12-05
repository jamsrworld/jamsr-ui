import { CircularProgress } from "@jamsr-ui/circular-progress";
import { Ripple } from "@jamsr-ui/ripple";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useButton, type UseButtonProps } from "./use-button";

export type ButtonProps = UseButtonProps;

export const Button = <T extends React.ElementType = "button">(
  props: ComponentPropsWithAs<T, ButtonProps>,
) => {
  const { size } = props;
  const {
    Component,
    children,
    endContent,
    getButtonProps,
    spinnerPlacement,
    isIconOnly,
    isLoading,
    startContent,
    styles,
    isDisabled,
    disableRipple,
  } = useButton({ ...props });
  const spinner = <CircularProgress size="sm" color="current" />;
  return (
    <Component
      data-component="button"
      data-slot="base"
      className={styles}
      {...getButtonProps()}
    >
      {isLoading && spinnerPlacement === "start" ? spinner : startContent}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === "end" ? spinner : endContent}
      {!isDisabled && !disableRipple && <Ripple isCenter={isIconOnly} />}
    </Component>
  );
};
