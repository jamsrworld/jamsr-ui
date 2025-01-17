import { cloneElement, type ComponentProps, isValidElement } from "react";
import { useDialogContext } from "./dialog-context";

type Props = {
  children: React.ReactElement<ComponentProps<"button">>;
  action?: "open" | "close";
};

export const DialogTrigger = (props: Props) => {
  const { setIsOpen } = useDialogContext();
  const { children, action = "open" } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    children.props?.onClick?.(e);
    setIsOpen(action === "open");
  };

  if (isValidElement(children)) {
    return cloneElement(children, {
      onClick: handleClick,
    });
  }

  console.warn("Invalid children passed to DialogTrigger");
  return null;
};
