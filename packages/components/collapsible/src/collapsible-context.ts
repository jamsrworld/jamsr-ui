import { createContext } from "@jamsr-ui/utils";

export type CollapsibleContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const [CollapsibleProvider, useCollapsibleContext] =
  createContext<CollapsibleContextType>({
    name: "CollapsibleContext",
    strict: true,
  });
