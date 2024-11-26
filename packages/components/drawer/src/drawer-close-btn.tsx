import { Button, type ButtonProps } from "@jamsr-ui/button";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { useDrawerContext } from "./use-drawer-context";

export const DrawerCloseButton = ($props: Partial<ButtonProps>) => {
  const props = $props;
  const { className: $className, ...restProps } = props;
  const { styles, classNames, slotProps = {} } = useDrawerContext();
  const className = styles.closeButton({
    className: cn(
      $className,
      slotProps.closeButton?.className,
      classNames?.closeButton,
    ),
  });
  return (
    <Button
      isIconOnly
      variant="light"
      isRounded
      {...slotProps.closeButton}
      {...restProps}
      className={className}
    >
      <CloseIcon />
    </Button>
  );
};
