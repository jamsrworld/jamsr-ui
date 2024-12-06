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
    styles,
    isDisabled,
    disableRipple,
  } = useIconButton({ ...props });
  const spinner = <CircularProgress size="sm" color="current" />;
  return (
    <Component
      data-component="button"
      data-slot="base"
      className={styles}
      {...getButtonProps()}
    >
      {isLoading ? spinner : children}
      {!isDisabled && !disableRipple && <Ripple isCenter />}
    </Component>
  );
};
