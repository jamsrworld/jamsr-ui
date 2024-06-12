import { CircularProgress } from "@jamsr-ui/progress";
import { Ripple } from "@jamsr-ui/ripple";
import { forwardRefUI } from "@jamsr-ui/utils";
import { useButton, type UseButtonProps } from "./use-button";

export type ButtonProps = UseButtonProps;
export const Button = forwardRefUI<"button", ButtonProps>((props, ref) => {
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

  const spinner = <CircularProgress />;
  return (
    <Component
      ref={ref}
      data-component="button"
      data-slot="base"
      className={styles}
      {...getButtonProps()}
    >
      {isLoading && spinnerPlacement === "start" ? spinner : startContent}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === "end" ? spinner : endContent}
      {!isDisabled && !disableRipple && <Ripple />}
    </Component>
  );
});
Button.displayName = "UI.Button";
