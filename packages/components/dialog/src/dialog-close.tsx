import { Button, type ButtonProps } from "@jamsr-ui/button";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { cn } from "@jamsr-ui/utils";
import { useDialogContext } from "./dialog-context";

export const DialogClose = (props: Partial<ButtonProps>) => {
  const { className, ...restProps } = props;
  const { setIsOpen } = useDialogContext();
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <Button
      data-slot="close"
      isIconOnly
      type="button"
      variant="light"
      onClick={handleClick}
      isRounded
      className={cn("absolute right-2 top-2 z-10", className)}
      {...restProps}
    >
      <CloseIcon />
    </Button>
  );
};
