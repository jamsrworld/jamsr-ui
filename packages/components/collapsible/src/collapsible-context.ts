import { createContext } from "@jamsr-ui/utils";

export type CollapsibleContextType = {
  isOpen: boolean;
  isDisabled?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  id: string;
};

export const [CollapsibleProvider, useCollapsibleContext] =
  createContext<CollapsibleContextType>({
    name: "CollapsibleContext",
    strict: true,
    errorMessage: "useCollapsibleContext must be used within a Collapsible",
  });
