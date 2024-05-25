import { Button, type ButtonProps } from "@jamsr-ui/button";
import { Close } from "@jamsr-ui/shared-icons";
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
      isIconOnly
      type="button"
      variant="light"
      onClick={handleClick}
      rounded
      className={cn("absolute right-2 top-2 z-10", className)}
      {...restProps}
      data-slot="close"
    >
      <Close />
    </Button>
  );
};
