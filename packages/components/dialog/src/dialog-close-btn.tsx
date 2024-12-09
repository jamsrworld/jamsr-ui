import { IconButton, type IconButtonProps } from "@jamsr-ui/icon-button";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export const DialogCloseBtn = (props: Partial<IconButtonProps>) => {
  const { className: $className, ...restProps } = props;
  const { setIsOpen, styles, classNames, slotProps } = useDialogContext();
  const handleClick = () => {
    setIsOpen(false);
  };
  const className = styles.closeButton({
    className: cn(
      $className,
      classNames?.closeButton,
      slotProps?.closeButton?.className,
    ),
  });
  return (
    <IconButton
      aria-label="Close"
      data-slot="close"
      type="button"
      variant="light"
      onClick={handleClick}
      radius="full"
      {...slotProps?.closeButton}
      {...restProps}
      className={className}
    >
      <CloseIcon />
    </IconButton>
  );
};
