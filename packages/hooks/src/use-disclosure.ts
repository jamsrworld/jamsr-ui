import { useCallback, useState } from "react";

export const useDisclosure = (defaultOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);
  return {
    onToggle,
    isOpen,
    setIsOpen,
    onOpen,
    onClose,
  };
};
