import { CircularProgress } from "@jamsr-ui/circular-progress";
import { Ripple } from "@jamsr-ui/ripple";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { useIconButton, type UseIconButtonProps } from "./use-icon-button";

export type IconButtonProps = UseIconButtonProps;

export const IconButton = <T extends React.ElementType = "button">(
  props: ComponentPropsWithAs<T, IconButtonProps>,
) => {
  const {
    Component,
    children,
    getButtonProps,
    isLoading,
    isDisabled,
    disableRipple,
    getLabelProps,
    spinner: propSpinner,
    ariaLabel,
  } = useIconButton({ ...props });
  const spinner = propSpinner ?? <CircularProgress size={30} color="current" />;
  return (
    <Component data-component="button" {...getButtonProps()}>
      <span {...getLabelProps()}>{ariaLabel}</span>
      {isLoading ? spinner : children}
      {!isDisabled && !disableRipple && <Ripple isCenter />}
    </Component>
  );
};
