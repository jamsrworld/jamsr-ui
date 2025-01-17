import { useDialogContext, type DialogContextType } from "./dialog-context";

type DialogStateProps = Pick<DialogContextType, "isOpen" | "setIsOpen"> & {
  onClose: () => void;
};

type Props = {
  children: (props: DialogStateProps) => React.ReactNode;
};

export const DialogState = (props: Props) => {
  const { children } = props;
  const { isOpen, setIsOpen } = useDialogContext();
  const onClose = () => setIsOpen(false);
  return children({ isOpen, setIsOpen, onClose });
};
