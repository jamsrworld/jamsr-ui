import { Button, type ButtonProps } from "@jamsr-ui/button";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export const DialogCloseBtn = (props: Partial<ButtonProps>) => {
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
    <Button
      data-slot="close"
      isIconOnly
      type="button"
      variant="light"
      onClick={handleClick}
      isRounded
      {...slotProps?.closeButton}
      {...restProps}
      className={className}
    >
      <CloseIcon />
    </Button>
  );
};
