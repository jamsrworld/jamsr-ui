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
    isContinue,
    disableRipple,
  } = useButton({ ...props });

  const spinner = <CircularProgress />;
  const endContentWithContinue = isContinue ? <ArrowIcons.Right /> : endContent;
  return (
    <Component
      ref={ref}
      className={styles}
      {...getButtonProps()}
    >
      {isLoading && spinnerPlacement === "start" ? spinner : startContent}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === "end"
        ? spinner
        : endContentWithContinue}
      {!isDisabled && !disableRipple && <Ripple />}
    </Component>
  );
});
Button.displayName = "UI.Button";
